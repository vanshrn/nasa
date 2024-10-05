import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./compenents/About";
import Navbar from "./compenents/Navbar"; // Corrected spelling
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
    const queryParams = { name, size, distance };

    try {
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
    <Router>
      <Fragment>
        <Earth />
        <Navbar />
        <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-bold mb-4">ASTEROID TRACKER</h1>
          <nav className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-yellow-300">HOME</Link>
            <Link to="/about" className="hover:text-yellow-300">ABOUT</Link>
            <Link to="/distance" className="hover:text-yellow-300">DISTANCE</Link>
            <Link to="/direction" className="hover:text-yellow-300">DIRECTION</Link>
            <Link to="/search" className="hover:text-yellow-300">SEARCH</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={
            <div className="flex justify-center p-6 text-black">
              <div className="flex flex-col space-y-4">
                <input
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter Asteroid Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter Asteroid Size"
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
                <input
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Enter Asteroid Distance"
                  type="text"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
                <button
                  onClick={searchAsteroids}
                  className="bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                >
                  SEARCH
                </button>
              </div>
            </div>
          } />

          {/* Cards Section for Search Results */}
          <Route path="/search" element={
            <div className="flex flex-wrap justify-center p-6 space-x-4">
              {asteroids.length > 0 ? (
                asteroids.map((asteroid, index) => (
                  <div
                    className="bg-white text-gray-900 rounded-lg shadow-lg p-4 m-2 cursor-pointer transition-transform transform hover:scale-105"
                    key={index}
                    onClick={() => handleAsteroidSelect(asteroid)}
                  >
                    <h2 className="text-xl font-semibold">{asteroid.name}</h2>
                  </div>
                ))
              ) : (
                <p className="text-white">No results found</p>
              )}
            </div>
          } />
          <Route path="/about" element={<About />} />

          {/* Detailed View of Selected Asteroid */}
          <Route path="/details" element={
            selectedAsteroid ? (
              <div className="p-6 bg-gray-800 rounded-lg text-white">
                <button
                  className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300 mb-4"
                  onClick={resetSelection}
                >
                  Back to Results
                </button>
                <div className="flex flex-col space-y-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">Name: {selectedAsteroid.name}</h2>
                    <img
                      className="mt-2"
                      src={`path/to/asteroid/images/${selectedAsteroid.name}.jpg`}
                      alt={selectedAsteroid.name}
                    />
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">Size: {selectedAsteroid.estimated_diameter_meters} meters</h2>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">Distance: {selectedAsteroid.miss_distance_km} km</h2>
                  </div>
                </div>
              </div>
            ) : (
              <div>No asteroid selected.</div>
            )
          } />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
