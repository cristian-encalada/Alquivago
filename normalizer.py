import json
import random

# Lee el archivo JSON de entrada
with open('gallito.json', 'r') as file:
    data = json.load(file)


new_data = []
for propietys in data:
    new_format = {"id": propietys["id"],
        "url_link": propietys["url_link"],
        "origin" : "Gallito",
        "price_UYU": propietys["price"],
        "price_USS": propietys["price"],
        "exchange": propietys["exchange"],
        "state_name": propietys["state_name"],
        "city_name": propietys["city_name"],
        "PROPERTY_TYPE": propietys["PROPERTY_TYPE"],
        "TOTAL_AREA": random.randint(30, 100),
        "FULL_BATHROOMS": random.randint(1, 5),
        "BEDROOMS": random.randint(1, 5),
        "location": {
            "latitude": propietys["location"]["latitude"],
            "longitude": propietys["location"]["longitude"]
        },
        "imagenes":  propietys["imagenes"]}
    new_data.append(new_format)



# Escribe el nuevo diccionario en un archivo JSON de salida
with open('output.json', 'w') as file:
    json.dump(new_data, file, indent=4)

print("Archivo output.json creado con éxito.")
