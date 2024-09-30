import pandas as pd
from skyfield.api import load
from astropy.time import Time
import matplotlib.pyplot as plt

# Load the asteroid data from CSV
df = pd.read_csv('asteroid_data.csv')

# Data Processing Steps
df['miss_distance_m'] = df['miss_distance_km'].astype(float) * 1000
df_filtered = df[df['miss_distance_km'].astype(float) < 0.05 * 149597870.7]

# Print filtered results
print("Asteroids within 0.05 AU:")
print(df_filtered[['name', 'miss_distance_km', 'close_approach_date']])

# Load data from Skyfield
ts = load.timescale()
eph = load('de421.bsp')  # Load the JPL DE421 ephemeris

for index, row in df.iterrows():
    close_approach_date = Time(row['close_approach_date'])
    asteroid_name = row['name']

    # Get the asteroid data (Skyfield uses a different method to handle minor bodies)
    asteroid = eph[asteroid_name]
    t = ts.utc(close_approach_date.datetime)  # Convert to UTC time

    # Calculate position
    ast_pos = asteroid.at(t)
    print(f"{asteroid_name} position: {ast_pos.position.au} AU")

# Data Visualization
plt.figure(figsize=(10, 6))
plt.bar(df['name'], df['estimated_diameter_meters'], color='blue')
plt.xlabel('Asteroid Name')
plt.ylabel('Estimated Diameter (meters)')
plt.title('Estimated Diameter of Asteroids')
plt.xticks(rotation=90)
plt.tight_layout()
plt.show()
