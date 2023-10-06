import json
import pymongo

# Connect to the local MongoDB database
# client = pymongo.MongoClient("mongodb://localhost:27017")

# Connect to the MongoDB Atlas database
atlas_uri = "mongodb+srv://alquivago:alquivago123@cluster0.e4fyf7c.mongodb.net/?retryWrites=true&w=majority"

# Connect to the MongoDB Atlas database
client = pymongo.MongoClient(atlas_uri)


db = client["alquivago"]

# Create a collection for collected data
collected_data = db["collected_data"]

# Read the 3 .json files and combine the data
data = []

# Read and append data from infocasas.json
file1 = open("infocasas.json")
data1 = json.load(file1)
file1.close()
data.extend(data1)

# Read and append data from gallito.json
file2 = open("gallito.json")
data2 = json.load(file2)
file2.close()
data.extend(data2)

# Read and append data from mercadolibre.json
file3 = open("mercadolibre.json")
data3 = json.load(file3)
file3.close()
data.extend(data3)

# Check if a document with the same 'id' exists in the collection and insert if it doesn't
def insert_if_not_exists(collection, document_id, data):
    if not collection.find_one({"id": document_id}):
        collection.insert_one(data)

# Loop through data and insert if not exists
for item_data in data:
    document_id = item_data["id"]
    insert_if_not_exists(collected_data, document_id, item_data)

print("Data successfully stored into MongoDB database!")
