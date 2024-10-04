import csv

# Step 1: Read asteroid data from the CSV file
def read_from_csv(csv_file_path):
    data = []
    with open(csv_file_path, mode='r', newline='') as file:
        reader = csv.DictReader(file)  # Use DictReader for column access
        for row in reader:
            data.append({
                "name": row["name"],  # Updated to match the CSV header
                "estimated_diameter": row["estimated_diameter_meters"],  # Updated to match the CSV header
                "close_approach_date": row["close_approach_date"],  # Updated to match the CSV header
                "relative_velocity": row["relative_velocity_kmh"],  # Updated to match the CSV header
                "miss_distance": row["miss_distance_km"]  # Updated to match the CSV header
            })
    return data

# Step 2: Specify the path to your CSV file
csv_file_path = r"backend\asteroid_data.csv"  # Use a raw string for the path

# Step 3: Read the data from the CSV file
asteroid_data = read_from_csv(csv_file_path)

# Step 4: Print the fetched asteroid data
for asteroid in asteroid_data:
    print(asteroid)
