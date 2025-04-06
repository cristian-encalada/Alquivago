""" Flask Application """
from flask import Flask
from handlers.routes import configure_routes
from flask import Flask, Blueprint, jsonify, make_response
from flask_cors import CORS
from flasgger import Swagger
from dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__)
CORS(app)
Swagger(app)
# app.register_blueprint(app_views)

app.config['MONGO_URI'] = os.getenv('MONGO_URI')

configure_routes(app)

if __name__ == "__main__":
    app.run(debug=True)
