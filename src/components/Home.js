import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/OIP.jpeg";

const Home = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Home</p>
        <h1 className="primary-heading">
          CAKE 
        </h1>
        <p className="primary-text">
        Cakes are frequently described according to their physical form.
        Cakes may be small and intended for individual consumption. 
        </p>
        <p className="primary-text">
        Larger cakes may be made to be sliced and served as part of a meal or social function. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;