import requests
import json
import re

# Define the API URL
api_url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1459&limit=50"

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
        operation_type = None
        bathrooms = None
        bedrooms = None
        total_area = None
        
        for attribute in result.get("attributes", []):
            if attribute.get("id") == "PROPERTY_TYPE":
                property_type = attribute.get("value_name")
            elif attribute.get("id") == "OPERATION":
                operation_type = attribute.get("value_name")
            elif attribute.get("id") == "FULL_BATHROOMS":
                bathrooms_value = attribute.get("value_name")
                bathrooms = int(bathrooms_value) if bathrooms_value.isdigit() else None
            elif attribute.get("id") == "BEDROOMS":
                bedrooms_value = attribute.get("value_name")
                bedrooms = int(bedrooms_value) if bedrooms_value.isdigit() else None
            elif attribute.get("id") == "TOTAL_AREA":
                total_area_value = attribute.get("value_name")
                numeric_part = re.search(r'\d+', total_area_value)
                total_area = int(numeric_part.group()) if numeric_part else None
        
        item_data = {
            "id": "MLU_" + result.get("id"),
            "url_link": result.get("permalink"),
            "origin": "mercado_libre",
            "operation_type": operation_type,
            "price": result.get("price"),
            "currency": result.get("currency_id"),
            "state_name": result.get("address", {}).get("state_name"),
            "zone_name": result.get("address", {}).get("city_name"),
            "property_type": property_type,
            "total_area": total_area,
            "bathrooms": bathrooms,
            "bedrooms": bedrooms,
            "location": {
                "latitude": result.get("location", {}).get("latitude"),
                "longitude": result.get("location", {}).get("longitude")
            },
            "images": [result.get("thumbnail")]
        }
        extracted_data.append(item_data)

    # Save the extracted data to a JSON file
    with open("extracted_data.json", "w", encoding="utf-8") as json_file:
        json.dump(extracted_data, json_file, ensure_ascii=False, indent=4)
        
    print("Data has been extracted and saved to 'extracted_data.json'.")
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
