import json
import pymongo

# Connect to the MongoDB database
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["alquivago"]

# Create 3 collections
coll_infocasas = db["coll_infocasas"]
coll_gallito = db["coll_gallito"]
coll_mercadolibre = db["coll_mercadolibre"]

# Read the 3 .json files
file1 = open("infocasas.json")
data1 = json.load(file1)
file1.close()

file2 = open("gallito.json")
data2 = json.load(file2)
file2.close()

file3 = open("mercadolibre.json")
data3 = json.load(file3)
file3.close()

# Insert the data into the MongoDB collections
coll_infocasas.insert_many(data1)
coll_gallito.insert_many(data2)
coll_mercadolibre.insert_many(data3)

print("Data successfully stored in MongoDB!")
