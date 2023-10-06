from alquivago.factory import create_app

import os
import configparser


config = configparser.ConfigParser()
#config.read("sample_ini")#archivo con la ruta de la vase de datos tanto de testeo como oficial

if __name__ == "__main__":
    app = create_app()
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = "mongodb+srv://alquivago:alquivago123@cluster0.e4fyf7c.mongodb.net/?retryWrites=true&w=majority"

    app.run(host='0.0.0.0', port=5000)
