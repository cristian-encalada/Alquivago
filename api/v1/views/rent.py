from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from api.v1.views.utils import is_int, chek_int, tex_none, sorting, conversion
from api.v1.views.db import get_rents, get_all
from flasgger import Swagger
from flasgger.utils import swag_from

conv = conversion()

@app_views.route('/', methods=['GET'], strict_slashes=False)
@swag_from('documentation/rent/get_all.yml', methods=['GET'])
def api_get_all():
    RENTS_PER_PAGE = 10

    page = is_int(request.args.get('page'))
    if page is None or page == 0:
        page = 1
    sort = sorting(request.args.get('orden'))

    print(page)

    (rents, total_num_entries) = get_all(
        conv, sort, page, rents_per_page=RENTS_PER_PAGE)

    response = {
    "rents": rents,
    "page": page,
    "filters": sort,
    "entries_per_page": RENTS_PER_PAGE,
    "total_results": total_num_entries,
    }

    return jsonify(response)

@app_views.route('/filtro', methods=['GET'], strict_slashes=False)
@swag_from('documentation/rent/filtro.yml', methods=['GET'])
def api_get_rent():
    RENTS_PER_PAGE = 10

    page = is_int(request.args.get('page'))
    if page is None or page == 0:
        page = 1
    filters = {
        "types": chek_int(request.args.get('tipos')),
        "zones": tex_none(request.args.get('zonas')),
        "bedrooms": chek_int(request.args.get('dormitorios')),
        "bathrooms": chek_int(request.args.get('baños')),
        "sort": sorting(request.args.get('orden'))} #orden=zonas:1,types:-1

    currency = request.args.get('moneda')
    price_min_max = chek_int(request.args.get('min_max'))
    area_min_max = chek_int(request.args.get('area'))

    if currency is not None and price_min_max is not None and len(price_min_max) == 2:
        filters["price"] = {
            "currency" : request.args.get('moneda'),
            "min": price_min_max[0],
            "max": price_min_max[1],
            "conv": conv}
    elif currency is not None and price_min_max is None:
        filters["currency"] = currency
    if area_min_max is not None and len(area_min_max) == 2:
        filters["area"] = {
            "min": area_min_max[0],
            "max": area_min_max[1]}

    print(filters)

    (rents, total_num_entries, query) = get_rents(
        conv, filters, page, rents_per_page=RENTS_PER_PAGE)

    response = {
        "rents": rents,
        "page": page,
        "filters": query,
        "entries_per_page": RENTS_PER_PAGE,
        "total_results": total_num_entries,
    }

    return jsonify(response)