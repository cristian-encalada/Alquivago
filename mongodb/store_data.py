import json
import pymongo

# Connect to the MongoDB database
client = pymongo.MongoClient("mongodb://localhost:27017")
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

# Check if a document with the same 'id' exists in the collection
def document_exists(collection, document_id):
    return collection.find_one({"id": document_id}) is not None

# Insert the combined data into a single collection, avoiding duplicates
collected_data.insert_many(data)

print("Data successfully stored into MongoDB database!")
