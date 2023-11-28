import React from "react";
import Logo from '../assets/cake.jpeg';
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>n
        <p className="primary-text">
        The term "cake" has a long history. The word itself is of Viking origin, from the Old Norse word "kaka".
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile" src={Logo} alt="" />
        <p>
        Cake is a sweet or savory baked food that can be made from different types of doughs or batters
        </p>
        <div className="testimonials-stars-container">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <h2>ur name</h2>
      </div>
    </div>
  );
};

export default Testimonial;
