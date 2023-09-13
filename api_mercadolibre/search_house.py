import requests
import json

# Define the API URL
api_url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1459&limit=5"

# Send a GET request to the API
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    
    # Initialize a list to store the extracted data
    extracted_data = []
    
    # Loop through the results and extract the required fields
    for result in data.get("results", []):
        # Initialize property type as None
        property_type = None
        
        # Loop through attributes to find the PROPERTY_TYPE
        for attribute in result.get("attributes", []):
            if attribute.get("id") == "PROPERTY_TYPE":
                property_type = attribute.get("value_name")
                break

        item_data = {
            "price": result.get("price"),
            "state_name": result.get("address", {}).get("state_name"),
            "city_name": result.get("address", {}).get("city_name"),
            "PROPERTY_TYPE": property_type,
            "TOTAL_AREA": result.get("attributes", [{}])[4].get("value_name"),
            "FULL_BATHROOMS": result.get("attributes", [{}])[5].get("value_name"),
            "BEDROOMS": result.get("attributes", [{}])[3].get("value_name"),
            "thumbnail": result.get("thumbnail"),
            "location": {
                "latitude": result.get("location", {}).get("latitude"),
                "longitude": result.get("location", {}).get("longitude")
            }
        }
        extracted_data.append(item_data)

    # Save the extracted data to a JSON file
    with open("extracted_data.json", "w", encoding="utf-8") as json_file:
        json.dump(extracted_data, json_file, ensure_ascii=False, indent=4)
        
    print("Data has been extracted and saved to 'extracted_data.json'.")
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
