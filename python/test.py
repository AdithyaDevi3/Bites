import requests

# Define the API endpoint URL
url = "https://api.example.com/data"

# Make the GET request
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the response data into a Python dictionary
    data = response.json()
    print(data)
else:
    print(f"Error: {response.status_code}")
