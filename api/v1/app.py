""" Flask Application """
from flask import Flask, Blueprint, jsonify, make_response
from api.v1.views import app_views


app = Flask(__name__)
# Set the configuration variable for Mongo DB
app.register_blueprint(app_views)
app.config['MONGO_URI'] = "mongodb+srv://alquivago:alquivago123@cluster0.hhicxbc.mongodb.net/alquivago?retryWrites=true&w=majority"


@app.errorhandler(404)
def not_found(error):
    """ 404 Error
    ---
    responses:
      404:
        description: a resource was not found
    """
    return make_response(jsonify({'error': "Not found"}), 404)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)