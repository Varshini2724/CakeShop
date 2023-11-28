import React from "react";
import PickMeals from "../assets/pestry.jpeg";
import ChooseMeals from "../assets/icecake.jpg";
import DeliveryMeals from "../assets/chocolate.jpeg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pestry Cake",
      text: "Pestry is baked food made with a dough of flour,water,and shortening that may be savoury or sweetened",
    },
    {
      image: ChooseMeals,
      title: "Ice Cake",
      text: "Ice cake is a cake filled with ice cream with layers of sponge cake or cookie crumble in between.",
    },
    {
      image: DeliveryMeals,
      title: "Chocolate Cake",
      text: "Chocolate cake is a cake made with chocolate or cocoa.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Some Deliceous Cakes</h1>
        <p className="primary-text">
          A Cake is a sweet food made by baking a mixture of flour,
          eggs,sugar,and fat in an oven.
          </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;