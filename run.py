from alquivago.factory import create_app

import os
import configparser


config = configparser.ConfigParser()
config.read("sample_ini")

if __name__ == "__main__":
    app = create_app()
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = config['TEST']['DB_URI']

    app.run()