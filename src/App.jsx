import Navbar from "./compenents/Navbar";
import Earth from "./spline-viewer/Earth";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Earth></Earth>
      <Navbar></Navbar>
      <div class="header">
        <h1>ASTEROID TRACKER</h1>
      </div>
      <div class="search-section">
        <div class="form">
          <input placeholder="Enter Asteroid Name" type="text" />
          <input placeholder="Enter Asteroid Size" type="range" />
          <input placeholder="Enter Asteroid Distance" type="text" />
          <input placeholder="Enter Asteroid Direction" type="text" />
          <button>SEARCH</button>
        </div>
        <div class="visual">
          <img
            alt="Asteroid visualization with orbit paths and labels for name, size, and distance"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/odzQVSD7AUamMRnZB0AsTYvezYfbkbIgnLeKtOpsfiLDllKOB.jpg"
            width="600"
          />
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <h2>NAME</h2>
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
        <div class="card">
          <h2>SIZE</h2>
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
        <div class="card">
          <h2>DIRECTION</h2>
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
