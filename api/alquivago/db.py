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
propertys = "collected_data"

def build_query_sort_project(filters, conv):
    """
    Builds the `query` predicate, `sort` and `projection` attributes for a given
    filters dictionary.
    """
    sort = filters["sort"]
    query = {}
    project = None # elije que datos traer, de momento traeremos todos

    #constantes
    more_bathrooms = 3
    more_bedrooms = 4
    conversion_min = None
    conversion_max = None
    conv = 40 #valor de cmabio entre UYU y USD

    #filtrado
    filters_list = []
    if filters["types"] is not None: #es una lista de strigs, normalisadas ["normalisado", ...]
        filters_list.append({"property_type": {"$in": filters["types"]}})

    if filters["zones"] is not None: #es una lista de strigs, sin normalisar por completo ["no_normalisado"(none), "normalisado", ...]
        escaped_zones = [re.escape(zone) for zone in filters["zones"]]
        regex_pattern = "|".join(escaped_zones)
        filters_list.append({"zone_name": {"$regex": regex_pattern, "$options": "i"}})# "i" para que sea insensible a mayúsculas/minúsculas
    
    if filters["bedrooms"] is not None: #es una lista con lista de numeros y un valor especial para valores supreiores [num, num+(none)]
        list_b = [element for element in filters["bedrooms"] if element != None and element <= more_bedrooms]
        if len(list_b) > 0:
            bedrooms = {"$or": [{"bedrooms": {"$in": list_b}}]}
            if more_bedrooms in list_b:
                bedrooms["$or"].append({"bedrooms": {"$gt": more_bedrooms}})
            filters_list.append(bedrooms)

    if filters["bathrooms"] is not None: #es una lista con lista de numeros y un valor especial para valores supreiores [num] 
        list_b = [element for element in filters["bathrooms"] if element != None and element <= more_bathrooms]
        if len(list_b) > 0:
            bathrooms = {"$or": [{"bathrooms": {"$in": list_b}}]}
            if more_bathrooms in list_b:
                bathrooms["$or"].append({"bathrooms": {"$gt": more_bathrooms}})
            filters_list.append(bathrooms)

    if "price" in filters: #es un diccionario con tres valores ["currency": "tipo", "min": int(none), "max": int(none)]
        price = { "$or": [
            {"currency": "UYU", "price": {}}, #CAMBIAR $U POR UYU Y price_UYU POR price
            {"currency": "USD", "price": {}}
        ]}
        price_min = filters["price"]["min"]
        price_max = filters["price"]["max"]
        if filters["price"]["currency"] == "UYU":
            if price_min is not None:
                conversion_min = price_min / conv
                price["$or"][0]["price"]["$gte"] = price_min
                price["$or"][1]["price"]["$gte"] = conversion_min
            if price_max is not None:
                conversion_max = price_max / conv
                price["$or"][0]["price"]["$lte"] = price_max
                price["$or"][1]["price"]["$lte"] = conversion_max
        elif filters["price"]["currency"] == "USD":
            if price_min is not None:
                conversion_min = price_min * conv
                price["$or"][0]["price"]["$gte"] = conversion_min
                price["$or"][1]["price"]["$gte"] = price_min
            if price_max is not None:
                conversion_max = price_max * conv
                price["$or"][0]["price"]["$lte"] = conversion_max
                price["$or"][1]["price"]["$lte"] = price_max
        if price_min is not None or price_max is not None:
            filters_list.append(price)
        #if "orden" not in filters:
        if "price" in sort:
            sort["price"] = 1# orden base acendente
        
    if "area" in filters: #es un diccionario con 2 valores ["min": int(none), "max": int(none)]
        area = {"total_area": {}}
        area_min = filters["area"]["min"]
        area_max = filters["area"]["max"]
        if area_min is not None:
            area["total_area"]["$gte"] = area_min
        if area_max is not None:
            area["total_area"]["$lte"] = area_max
        if area_min is not None or area_max is not None:
            filters_list.append(area)
        if "area" in sort:
            sort["area"] = -1# orden base desendente
    
    if "currency" in filters:#es un string
        filters_list.append({"currency": filters["currency"]})
    
    #filtro de proximidad con la latitud y longitud
    
    if filters_list:
        query["$and"] = filters_list
    
    return query, sort, project


def sort_apply(rent, sort, conv):
    """apply sort"""
     #ordenamiento 
    sorts = {}
    rent = list(rent)
    if sort is not None:
        type = {"area": "total_area", "price": "price_conv"}
        for o, t in sort.items():
            if o in type:
                sorts[type[o]] = t
    if "price" in sort and rent:
        for document in rent:
            document["price_conv"] = document["price"]
            if document["currency"] == "USD":
                document["price_conv"] = document["price"] * conv
    
    print(rent)
    if len(sorts) != 0:
        def custom_key(document):
            return tuple(t * document[o] for o, t in sorts.items())
        rent = sorted(rent, key=custom_key)
    return(rent)

def delete__id(rent):
    """delete _id and price_conv"""
    if rent:
        for document in rent:
            del document["_id"] #delete the _id (ObjectID)
            if "price_conv" in document:
                del document["price_conv"]
    return rent


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
    conv = 40
    query, sort, project = build_query_sort_project(filters, conv)

    if project:
        cursor = db[propertys].find(query, project)
    else:
        cursor = db[propertys].find(query)
    
    
    total_num_rents = 0
    total_num_rents = db[propertys].count_documents(query)
    skip = (page - 1) * rents_per_page

    rents = sort_apply(cursor, sort, conv)
    
    print(rents)

    if (skip + rents_per_page) <= len(rents):
        rents = rents[skip:skip + rents_per_page]
    elif skip <= len(rents):
        rents = rents[skip:]
    else:
        rents = []
    rents = delete__id(rents)

    return (rents, total_num_rents, query)


def get_rent(id):
    """
    Given a rental property ID, return a property with that ID, with the comments for that
    property embedded in the property document. The comments are joined from the
    comments collection using expressive $lookup.
    """
    try:
        query = {"id": {"$in": id}}

        rents = db[propertys].find(query)

        return (list(rents))
    except StopIteration:
        return None

    except Exception as e:
        return {}


def get_all_type(page, rents_per_page):
    """
    List all type of rents
    """
    cursor = db[propertys].find()

    total_num_rents = 0
    total_num_rents = db[propertys].count_documents({})
    skip = (page - 1) * rents_per_page
 
    rents = cursor.skip(skip).limit(rents_per_page)

    rents = sort_apply(list(rents))

    return (rents, total_num_rents)