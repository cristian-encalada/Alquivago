import requests

url = "https://api.mercadolibre.com/oauth/token"
# Replace refresh_token, max token duration= 6 hours
payload = 'grant_type=refresh_token&client_id=2891021824389532&client_secret=iajMXPsG6rtxfGLGqcYzcYYu3Ne1yy5j&refresh_token=TG-6501015a6633ec0001c5e124-1296801692'
headers = {
  'accept': 'application/json',
  'content-type': 'application/x-www-form-urlencoded'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)