from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB configuration
client = MongoClient('mongodb://localhost:27017/')  # Replace with your MongoDB URI
db = client['alquivago']  # Replace with your database name
collection = db['collected_data']  # Replace with your collection name

@app.route('/api/data', methods=['GET'])
def get_data():
    data = list(collection.find({}, {'_id': 0}))  # Exclude the '_id' field from the response
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
