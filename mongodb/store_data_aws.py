import json
import pymongo
import requests

# MongoDB environment variables
mongo_ip = '3.139.93.137'
mongo_port = 27017
mongo_user = 'mongo'
mongo_password = 'password'
auth_db = 'admin'

# Connect to the MongoDB instance in AWS
client = pymongo.MongoClient(host=mongo_ip, port=mongo_port, username=mongo_user, password=mongo_password, authSource=auth_db)

db = client["alquivago"]
# Create a collection for collected data
collected_data = db["collected_data"]

# URLs of the JSON files on GitHub
github_urls = [
    "https://raw.githubusercontent.com/cristian-encalada/Alquivago/dev/mongodb/gallito.json",
    "https://raw.githubusercontent.com/cristian-encalada/Alquivago/dev/mongodb/infocasas.json",
    "https://raw.githubusercontent.com/cristian-encalada/Alquivago/dev/mongodb/mercadolibre.json",
]

data = []

# Read data from each GitHub URL and append it to the 'data' list
for github_url in github_urls:
    response = requests.get(github_url)
    if response.status_code == 200:
        json_data = response.json()
        data.extend(json_data)
    else:
        print(f"Failed to fetch data from {github_url}")

# Check if a document with the same 'id' exists in the collection and insert if it doesn't
def insert_if_not_exists(collection, document_id, data):
    if not collection.find_one({"id": document_id}):
        collection.insert_one(data)

# Loop through data and insert if not exists
for item_data in data:
    document_id = item_data["id"]
    insert_if_not_exists(collected_data, document_id, item_data)

print("Data successfully stored into MongoDB database!")
