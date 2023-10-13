import json
import pymongo
import requests
from tqdm import tqdm

# Connect to the MongoDB Atlas database
atlas_uri = "mongodb+srv://alquivago:alquivago123@cluster0.hhicxbc.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(atlas_uri)
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

print(f"Verifying github URLs...")

# Create a progress bar to retrieve the github URLs
with tqdm(total=len(github_urls)) as pbar:
    for github_url in github_urls:
        response = requests.get(github_url)
        if response.status_code == 200:
            json_data = response.json()
            data.extend(json_data)
        else:
            print(f"Failed to fetch data from {github_url}")
        pbar.update(1)  # Update the progress bar

# Read data from each GitHub URL and append it to the 'data' list
for github_url in github_urls:
    response = requests.get(github_url)
    if response.status_code == 200:
        json_data = response.json()
        data.extend(json_data)
    else:
        print(f"Failed to fetch data from {github_url}")

print(f"Checking duplicated data...")

# Check if a document with the same 'id' exists in the collection and insert if it doesn't
def insert_if_not_exists(collection, document_id, data):
    if not collection.find_one({"id": document_id}):
        collection.insert_one(data)

# Loop through data and insert if not exists
for item_data in data:
    document_id = item_data["id"]
    insert_if_not_exists(collected_data, document_id, item_data)


print(f"Storing data into Atlas MongoDB...")

# Create a progress bar for the insert loop
with tqdm(total=len(data)) as pbar:
    for item_data in data:
        document_id = item_data["id"]
        insert_if_not_exists(collected_data, document_id, item_data)
        pbar.update(1)  # Update the progress bar

print("Data successfully stored into MongoDB database!")
