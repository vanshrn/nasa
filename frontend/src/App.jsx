import Reaact, {Frangment, useState} from "react";
import Navbar from "./compenents/Navbar";
import Earth from "./spline-viewer/Earth";
import "./App.css";
import { Fragment } from "react";



function App() {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [distance, setDistance] = useState("");

  // State to manage asteroid search results
  const [asteroids, setAsteroids] = useState([]);

  // State to manage the selected asteroid for details
  const [selectedAsteroid, setSelectedAsteroid] = useState(null);

  // Function to handle the search button click
  const searchAsteroids = async () => {
    // Create a query based on input values
    const queryParams = {
      name: name,
      size: size,
      distance: distance,
    };

    try {
      // Fetch search results from the backend
      const response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryParams),
      });

      const data = await response.json();
      setAsteroids(data); // Update state with search results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle asteroid selection
  const handleAsteroidSelect = (asteroid) => {
    setSelectedAsteroid(asteroid);
  };

  // Function to reset the selected asteroid
  const resetSelection = () => {
    setSelectedAsteroid(null);
  };

  return (
    <Fragment>
      <Earth />
      <Navbar />
      <div className="header">
        <h1>ASTEROID TRACKER</h1>
        <div className="nav">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">DISTANCE</a>
          <a href="#">DIRECTION</a>
          <a href="#">SEARCH</a>
        </div>
      </div>
      <div className="search-section">
        <div className="form">
          <input
            placeholder="Enter Asteroid Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Enter Asteroid Size"
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <input
            placeholder="Enter Asteroid Distance"
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <button onClick={searchAsteroids}>SEARCH</button>
        </div>
      </div>

      {/* Cards Section for Search Results */}
      <div className="cards">
        {asteroids.length > 0 ? (
          asteroids.map((asteroid, index) => (
            <div
              className="result-card"
              key={index}
              onClick={() => handleAsteroidSelect(asteroid)}
            >
              <h2>{asteroid.name}</h2> {/* Displaying name only once */}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>

      {/* Detailed View of Selected Asteroid */}
      {selectedAsteroid && (
        <div className="detail-section">
          <button onClick={resetSelection}>Back to Results</button>
          <div className="detail-cards">
            <div className="detail-card">
              <h2>Name: {selectedAsteroid.name}</h2>
              <img src={`path/to/asteroid/images/${selectedAsteroid.name}.jpg`} alt={selectedAsteroid.name} />
            </div>
            <div className="detail-card">
              <h2>Size: {selectedAsteroid.estimated_diameter_meters} meters</h2>
            </div>
            <div className="detail-card">
              <h2>Distance: {selectedAsteroid.miss_distance_km} km</h2>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default App;