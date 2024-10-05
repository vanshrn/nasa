from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import csv

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Path to your CSV file
csv_file_path = 'asteroid_data.csv'

def read_asteroids_from_csv():
    asteroids = []
    with open(csv_file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            asteroids.append({
                "name": row["name"],
                "estimated_diameter_meters": float(row["estimated_diameter_meters"]),
                "close_approach_date": row["close_approach_date"],
                "relative_velocity_kmh": float(row["relative_velocity_kmh"]),
                "miss_distance_km": float(row["miss_distance_km"]),
                "direction": "North"  # Placeholder for direction
            })
    return asteroids

@app.route('/search', methods=['POST'])
def search_asteroids():
    data = request.get_json()

    # Extract query parameters
    search_name = data.get('name', '').lower()
    search_size_min = data.get('size_min', None)
    search_size_max = data.get('size_max', None)
    search_distance_min = data.get('distance_min', None)
    search_distance_max = data.get('distance_max', None)

    # Read asteroids data from the CSV file
    asteroids = read_asteroids_from_csv()

    # Filter the asteroids based on the search criteria
    filtered_asteroids = []
    for asteroid in asteroids:
        if search_name and search_name not in asteroid["name"].lower():
            continue
        if search_size_min and float(search_size_min) > asteroid["estimated_diameter_meters"]:
            continue
        if search_size_max and float(search_size_max) < asteroid["estimated_diameter_meters"]:
            continue
        if search_distance_min and float(search_distance_min) > asteroid["miss_distance_km"]:
            continue
        if search_distance_max and float(search_distance_max) < asteroid["miss_distance_km"]:
            continue
        filtered_asteroids.append(asteroid)

    return jsonify(filtered_asteroids)

if __name__ == '__main__':
    app.run(debug=True)
