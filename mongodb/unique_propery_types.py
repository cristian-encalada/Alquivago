import json
import os

# Directory where the JSON files are located
directory = os.getcwd()

# List to store unique property types
unique_property_types = set()

# Loop through each JSON file in the directory
for filename in os.listdir(directory):
    if filename.endswith(".json"):
        file_path = os.path.join(directory, filename)
        with open(file_path, "r") as json_file:
            data = json.load(json_file)
            for record in data:
                if isinstance(record, dict):
                    property_type = record.get("property_type")
                    if property_type:
                        unique_property_types.add(property_type)

# Convert the unique property types to a list of dictionaries
enumerated_property_types = [{"id": i, "name": property} for i, property in enumerate(unique_property_types)]

# Save the unique property types to a new JSON file
output_data = {"property_types": enumerated_property_types}
output_file = "property_types.json"
with open(output_file, "w") as json_file:
    json.dump(output_data, json_file, indent=4)

print(f"Unique property types saved to {output_file}")
