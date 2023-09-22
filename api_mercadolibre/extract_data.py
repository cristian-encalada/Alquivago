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
        
        # Extract the "OPERATION" value_name
        operation_type = None
        for attribute in result.get("attributes", []):
            if attribute.get("id") == "OPERATION":
                operation_type = attribute.get("value_name")
                break

        # Get the currency and price information
        currency_id = result.get("currency_id")
        price = result.get("price")

        # Determine price in UYU and USD based on currency_id
        if currency_id == "USD":
            price_uyu = 0
            price_usd = price
            currency = "USD"
        elif currency_id == "UYU":
            price_uyu = price
            price_usd = 0
            currency = "UYU"
        else:
            # Handle other currency scenarios here if needed
            price_uyu = 0
            price_usd = 0
            currency = currency_id

        item_data = {
            "id": "MLU_" + result.get("id"),
            "url_link": result.get("permalink"),
            "operation_type": operation_type,
            "price_uyu": price_uyu,
            "price_usd": price_usd,
            "currency": currency,
            "state_name": result.get("address", {}).get("state_name"),
            "zone_name": result.get("address", {}).get("city_name"),
            "property_type": property_type,
            "total_area": result.get("attributes", [{}])[4].get("value_name"),
            "bathrooms": result.get("attributes", [{}])[5].get("value_name"),
            "bedrooms": result.get("attributes", [{}])[3].get("value_name"),
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
