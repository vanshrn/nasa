import Navbar from "./compenents/Navbar/Navbar";
import Earth from "./spline-viewer/Earth";

import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Earth></Earth>
      <Navbar></Navbar>
      
      <div className="search-section">
          <div className="main"></div>
          <div className="form">
            <input placeholder="Enter Asteroid Name" type="text" style={{ color: 'black' }} />
            <input placeholder="Enter Asteroid Size (In KM )" type="number" style={{ color: 'black' }} />
            <input placeholder="Enter Asteroid Distance ( In AU )" type="number" style={{ color: 'black' }} />
            <input placeholder="Enter Ecliptic Longitude (λ) " type="text" style={{ color: 'black' }} />
            <button type="submit">SEARCH</button>
          </div>
        <div className="header">
          <h1>ASTEROID TRACKER</h1>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h2> NAME </h2>
          <img
            alt="Asteroid image with orbit paths"
            height="500"
            src="https://storage.googleapis.com/a1aa/image/RUUDVwLL3JZVLpOaF9lEKP5NsEeYHBOpOfuz0dDs1JWPZpiTA.jpg"
            width="550"
          />
          <p>Size: 1234 km</p>
          <p>Distance: 5678 km</p>
          <p>Direction: North</p>
        </div>
        <div className="card">
          <h2> SIZE </h2>
          <img
            alt="Asteroid image with orbit paths"
            height="300"
            src="https://storage.googleapis.com/a1aa/image/RUUDVwLL3JZVLpOaF9lEKP5NsEeYHBOpOfuz0dDs1JWPZpiTA.jpg"
            width="300"
          />
          <p>Size: 1234 km</p>
          <p>Distance: 5678 km</p>
          <p>Direction: North</p>
        </div>
        <div className="card">
          <h2> DIRECTION </h2>
          <img
            alt="Asteroid image with orbit paths"
            height="300"
            src="https://storage.googleapis.com/a1aa/image/RUUDVwLL3JZVLpOaF9lEKP5NsEeYHBOpOfuz0dDs1JWPZpiTA.jpg"
            width="300"
          />
          <p>Size: 1234 km</p>
          <p>Distance: 5678 km</p>
          <p>Direction: North</p>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
