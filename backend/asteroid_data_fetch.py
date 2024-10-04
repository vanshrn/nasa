import csv

# Step 1: Read asteroid data from the CSV file
def read_from_csv(csv_file_path):
    asteroid_data = []
    with open(csv_file_path, mode='r') as file:
        reader = csv.DictReader(file)  # Read the file as a dictionary
        for row in reader:
            asteroid_data.append({
                "name": row["Asteroid Name"],
                "id": row["ID"],
                "estimated_diameter_km": float(row["Estimated Diameter (km)"]),
                "close_approach_date": row["Close Approach Date"],
                "miss_distance_km": float(row["Miss Distance (km)"])
            })
    return asteroid_data

# Step 2: Process the data (print or manipulate as needed)
def process_asteroid_data(asteroid_data):
    for asteroid in asteroid_data:
        print(f"Asteroid: {asteroid['name']} (ID: {asteroid['id']})")
        print(f"  Estimated Diameter: {asteroid['estimated_diameter_km']} km")
        print(f"  Close Approach Date: {asteroid['close_approach_date']}")
        print(f"  Miss Distance: {asteroid['miss_distance_km']} km")
        print("-" * 50)

# Example usage
if __name__ == "__main__":
    csv_file_path = "asteroid_data.csv"
    asteroid_data = read_from_csv(csv_file_path)
    process_asteroid_data(asteroid_data)
