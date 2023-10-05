import requests
import json
import re

# Define the 1rst API URL
api_url = "https://api.mercadolibre.com/sites/MLU/search?category=MLU1459&limit=10"

# Send a GET request to the 1st API
response = requests.get(api_url)

# Check if the 1st API request was successful
if response.status_code == 200:
    data = response.json()
    
    # Initialize a list to store the extracted data
    extracted_data = []
    
    # Loop to extract the required fields
    for result in data.get("results", []):
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

        # Fetch images from a 2nd API using the item's id
        item_id = result.get("id")[3:]  # Remove the "MLU" prefix
        images_api_url = f"https://api.mercadolibre.com/items?ids=MLU{item_id}"
        images_response = requests.get(images_api_url)
        
        if images_response.status_code == 200:
            images_data = images_response.json()
            
            # Extract up to 5 image URLs from the response
            images = [image.get("secure_url") for image in images_data[0].get("body", {}).get("pictures", [])[:5]]
        else:
            images = []

        item_data = {
            "id": "MLU_" + result.get("id")[3:],
            "title": result.get("title"),
            "url_link": result.get("permalink"),
            "origin": "mercado_libre",
            "operation_type": operation_type,
            "price": float(result.get("price")),
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
            "images": images
        }
        extracted_data.append(item_data)

    # Save the extracted data to a JSON file
    with open("extracted_data.json", "w", encoding="utf-8") as json_file:
        json.dump(extracted_data, json_file, ensure_ascii=False, indent=4)
        
    print("Data has been extracted and saved to 'extracted_data.json'.")
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
