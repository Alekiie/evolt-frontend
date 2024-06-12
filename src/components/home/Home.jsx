import React from "react";
import { Car_Charging, LandingPageImage } from "../../assets/images";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container mt-32">
      <div className="text-container">
        <h1 className="home-title">EVOLT</h1>
        <p className="home-paragraph leading-10">
          Welcome to Evolt, your premier partner for EV charging solutions. We
          offer top-notch installation, maintenance, and cloud services to
          optimize your electric vehicle charging infrastructure. Join us in
          driving towards a sustainable future with reliable and innovative
          solutions.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="image-container">
        <img
          src={Car_Charging}
          alt="Evolt charging station"
          className="home-image rounded-md"
        />
      </div>
    </div>
  );
};

export default Home;
