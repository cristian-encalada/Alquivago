""" Flask Application """
from flask import Flask, Blueprint, jsonify, make_response
from api.v1.views import app_views
from flasgger import Swagger
from flasgger.utils import swag_from


app = Flask(__name__)
# Set the configuration variable for Mongo DB
app.register_blueprint(app_views)
app.config['MONGO_URI'] = "mongodb+srv://alquivago:alquivago123@cluster0.hhicxbc.mongodb.net/alquivago?retryWrites=true&w=majority"


@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/about')
def about():
    return 'About'

Swagger(app)

# if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=5000)