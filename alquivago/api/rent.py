from flask import Flask, Blueprint, request, jsonify

from alquivago.db import get_all_type, get_db, get_rent, get_rents

from flask_cors import CORS
from alquivago.api.utils import expect 
from datetime import datetime

rents_api_v1 = Blueprint('rent_api_v1', 'rent_api_v1', url_prefix='/api/v1/rent')

CORS(rents_api_v1)


@rents_api_v1.route('/filtro', methods=['GET'])
def api_get_rent():
    RENTS_PER_PAGE = 10

    page = int(request.args.get('page'))
    print(page)
    #filters = {"precio": {"moneda": "UYU", "min": 12000, "max": 12000}, "zonas": "Maroñas Curva", "tipos": "Apartamento", "area": {"min": 35, "max": 35}, "dormitorios": [[4], None], "baños": [[3], None]}
    filters = {"precio": {"moneda" : request.args.get('moneda'), "min": int(request.args.get('min')),  "max": int(request.args.get('max'))}}
    print(filters)
    """filters = {
        "precio": request.args.get('precio'),
        "zonas": request.args.get('zonas'),
        "tipos": request.args.get('tipos'),
        "area": request.args.get('area'),
        "dormitorios": request.args.get('dormitorios'),
        "baños": request.args.get('baños')
    }"""
    (rents, total_num_entries, query) = get_rents(
        filters, page, rents_per_page=RENTS_PER_PAGE)

    response = {
        "rents": rents,
        "page": page,
        "filters": query,
        "entries_per_page": RENTS_PER_PAGE,
        "total_results": total_num_entries,
    }

    return jsonify(response)

