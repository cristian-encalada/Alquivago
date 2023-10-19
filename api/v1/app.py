""" Flask Application """
from flask import Flask, Blueprint, jsonify, make_response
from flask_cors import CORS
from api.v1.views import app_views
from flasgger import Swagger
from flasgger.utils import swag_from


app = Flask(__name__)
# Set the configuration variable for Mongo DB
app.register_blueprint(app_views)
# _v1 = Blueprint('api_v1', 'api_v1', url_prefix='/api/v1')
# app.register_blueprint(api_v1)
app.config['MONGO_URI'] = "mongodb+srv://alquivago:alquivago123@cluster0.hhicxbc.mongodb.net/alquivago?retryWrites=true&w=majority"
CORS(app)

@app.route('/')
def home():
    return 'Hello, World!'

Swagger(app)

# if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=5000)