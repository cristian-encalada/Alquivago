import bson
import re


from flask import current_app, g
from werkzeug.local import LocalProxy
from flask_pymongo import PyMongo
from pymongo.errors import DuplicateKeyError, OperationFailure
from bson.objectid import ObjectId
from bson.errors import InvalidId


def get_db():
    """
    Configuration method to return db instance
    """
    db = getattr(g, "_database", None)

    if db is None:

        db = g._database = PyMongo(current_app).db
       
    return db


# Use LocalProxy to read the global db instance with just `db`
db = LocalProxy(get_db)


def build_query_sort_project(filters):
    """
    Builds the `query` predicate, `sort` and `projection` attributes for a given
    filters dictionary.
    """
    sort = []
    query = {}
    project = None # elije que datos traer, de momento traeremos todos


    #ordenamiento 

    if "orden" in filters:
        tipo = {"area": "TOTAL_AREA", "UYU": "price_UYU", "USD": "price_USS"}
        for o, t in filters["orden"]:
            if o in tipo:
                sort.append((tipo[o], t))


    #filtrado
    filters_list = []
    if "tipos" in filters: #es una lista de strigs, normalisadas ["normalisado", ...]
        filters_list.append({"PROPERTY_TYPE": filters["tipos"]})

    if "zonas" in filters: #es una lista de strigs, sin normalisar por completo ["no_normalisado"(none), "normalisado", ...]
        escaped_zonas = [re.escape(zona) for zona in filters["zonas"]]
        regex_pattern = "|".join(escaped_zonas)
        filters_list.append({"city_name": {"$regex": regex_pattern, "$options": "i"}})# "i" para que sea insensible a mayúsculas/minúsculas
    
    if "dormitorios" in filters: #es una lista con lista de numeros y un valor especial para valores supreiores [num, num+(none)]
        filters_list.append({"$or": [
            {"BEDROOMS": {"$in": filters["dormitorios"][0]}},
            {"BEDROOMS": {"$gte": filters["dormitorios"][1]}}
        ]})

    if "baños" in filters: #es una lista con lista de numeros y un valor especial para valores supreiores [num, num+(none)]
        filters_list.append({"$or": [
            {"FULL_BATHROOMS": {"$in": filters["baños"][0]}},
            {"FULL_BATHROOMS": {"$gte": filters["baños"][1]}}
        ]})
    
    if "precio" in filters: #es un diccionario con tres valores ["moneda": "tipo", "min": int(none), "max": int(none)]
        if filters["precio"]["moneda"] == "UYU":
            filters_list.append({"price_UYU": { "$gte": filters["precio"]["min"], "$lte": filters["precio"]["max"]}})
            if "orden" not in filters:
                sort.append(("price_UYU", 1))# orden base
        elif filters["precio"]["moneda"] == "USD":
            filters_list.append({"price_USS": { "$gte": filters["precio"]["min"], "$lte": filters["precio"]["max"]}})
            if "orden" not in filters:
                sort.append(("price_USS", 1))# orden base
    
    if "area" in filters: #es un diccionario con 2 valores ["min": int(none), "max": int(none)]
        filters_list.append({"TOTAL_AREA": { "$gte": filters["area"]["min"], "$lte": filters["area"]["max"]}})
        if "orden" not in filters:
            sort.append(("TOTAL_AREA", -1))# orden base
    
    #filtro de proximidad con la latitud y longitud
    if filters_list:
        query["$and"] = filters_list
    
    return query, sort, project


def get_rents(filters, page, rents_per_page):
    """
    Returns a cursor to a list of rental property documents.

    Based on the page number and the number of properties per page, the result may
    be skipped and limited.

    The `filters` from the API are passed to the `build_query_sort_project`
    method, which constructs a query, sort, and projection, and then that query
    is executed by this method (`get_rental_properties`).

    Returns 2 elements in a tuple: (properties, total_num_properties)
    """
    query, sort, project = build_query_sort_project(filters)

    if project:
        cursor = db.propertys.find(query, project).sort(sort)
    elif sort:
        cursor = db.propertys.find(query).sort(sort)
    else:
        cursor = db.propertys.find(query)
    
    total_num_rents = 0
    if page == 0:
        total_num_rents = db.propertys.count_documents(query)
 
    rents = cursor.limit(rents_per_page)

    return (list(rents), total_num_rents, query)

def get_rent(id):
    """
    Given a rental property ID, return a property with that ID, with the comments for that
    property embedded in the property document. The comments are joined from the
    comments collection using expressive $lookup.
    """


def get_all_type(page, rents_per_page):
    """
    List all type of rents
    """
    cursor = db.propertys.find()
    total_num_rents = 0
    if page == 0:
        total_num_rents = db.propertys.count_documents({})
 
    rents = cursor.limit(rents_per_page)

    return (list(rents), total_num_rents)