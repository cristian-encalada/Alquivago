import json
import pymongo

# Connect to the MongoDB database
client = pymongo.MongoClient("mongodb+srv://alice:CheshireCat@prueba.emolc4y.mongodb.net/?retryWrites=true&w=majority")
db = client["alquivago_test"]

propertys = db["propertys"]




file2 = open("output.json")
data2 = json.load(file2)
file2.close()



# Insert the data into the MongoDB collections

propertys.insert_many(data2)


print("Data successfully stored in MongoDB!")