import requests
# https://auth.mercadolibre.com.uy/authorization?response_type=code&client_id=2891021824389532&redirect_uri=https://cristian-encalada.github.io/holberton-final-project/
url = "https://api.mercadolibre.com/oauth/token"
# Replace code=TG-XXX to obtain a new token
payload = 'grant_type=authorization_code&client_id=2891021824389532&client_secret=iajMXPsG6rtxfGLGqcYzcYYu3Ne1yy5j&code=TG-6500ffc86633ec0001c5b732-1296801692&redirect_uri=https%3A%2F%2Fcristian-encalada.github.io%2Fholberton-final-project%2F&code_verifier=%24CODE_VERIFIER'
headers = {
  'accept': 'application/json',
  'content-type': 'application/x-www-form-urlencoded'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
