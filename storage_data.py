import json
import pymongo

# Connect to the MongoDB database
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["mydb"]

coll_gallito = db["coll_gallito"]




file2 = open("gallito.json")
data2 = json.load(file2)
file2.close()



# Insert the data into the MongoDB collections

coll_gallito.insert_many(data2)


print("Data successfully stored in MongoDB!")