import requests
import pandas as pd

# NASA NEO API URL and API key
api_key = "yIJQdGsu8KwgLpQAXexBQEbSzvfD1isJQhgEijgi"  # Replace with your actual API key
url = f"https://api.nasa.gov/neo/rest/v1/feed?api_key={api_key}"

try:
    # Send the API request
    response = requests.get(url)

    # Check if the response is successful
    if response.status_code == 200:
        data = response.json()  # Parse the response as JSON

        # Extracting the relevant information
        asteroids = data['near_earth_objects']  # This contains the asteroid data
        
        # Create a list to store the asteroid data
        asteroid_list = []
        
        # Loop through the asteroid data
        for date, asteroid_data in asteroids.items():
            for asteroid in asteroid_data:
                asteroid_info = {
                    'name': asteroid['name'],
                    'estimated_diameter_meters': asteroid['estimated_diameter']['meters']['estimated_diameter_max'],
                    'close_approach_date': asteroid['close_approach_data'][0]['close_approach_date'],
                    'relative_velocity_kmh': asteroid['close_approach_data'][0]['relative_velocity']['kilometers_per_hour'],
                    'miss_distance_km': asteroid['close_approach_data'][0]['miss_distance']['kilometers']
                }
                asteroid_list.append(asteroid_info)

        # Create a DataFrame from the asteroid list
        df = pd.DataFrame(asteroid_list)

        # Save to CSV
        df.to_csv('asteroid_data.csv', index=False)
        print("Data collection complete. Data saved to asteroid_data.csv.")
        
    else:
        print(f"Error: {response.status_code}")
        print(response.text)  # Additional error information

except requests.exceptions.RequestException as e:
    print(f"Failed to fetch data: {e}")
