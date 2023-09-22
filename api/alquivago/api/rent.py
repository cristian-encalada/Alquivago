from flask import Flask, Blueprint, request, jsonify

from alquivago.db import get_all_type, get_db, get_rent, get_rents

from flask_cors import CORS
from alquivago.api.utils import expect 
from datetime import datetime

rents_api_v1 = Blueprint('rent_api_v1', 'rent_api_v1', url_prefix='/api/v1/rent')

CORS(rents_api_v1)


@rents_api_v1.route('/data', methods=['GET'])
def api_get_rent():
    RENTS_PER_PAGE = 20

    (rents, total_num_entries) = get_rents(
        None, page=0, rents_per_page=RENTS_PER_PAGE)

    response = {
        "rents": rents,
        "page": 0,
        "filters": {},
        "entries_per_page": RENTS_PER_PAGE,
        "total_results": total_num_entries,
    }

    return jsonify(response)

