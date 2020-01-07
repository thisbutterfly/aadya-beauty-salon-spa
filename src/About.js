import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";

export default class About extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">
          Welcome to Salon and Spa
        </h1>
        <HeadingUnderline />
        <div className="container">
          <p className="subtitle has-text-centered has-text-black-ter is-size-5">
            You will like to look like goddess every day!
          </p>
          <p className="has-text-centered">
            Paradise products combine botanical and advanced cosmeceutical
            ingredients with the Science of Beauty to bring you the ultimate in
            professional skincare in a retail form. Created from natural herbs,
            100% safe for your skin, unique from other Spa treatments, quality
            product from SpaLabs, special gifts & offers for you created by
            Medical Professionals of Spa Lab.
          </p>
          <div className="about-images-container">
            <img src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578378875/Salon-n-Spa/about-images/about-image-3_qazdzf.jpg" alt= "about placeholder" className="about-image" />
            <img src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578378875/Salon-n-Spa/about-images/about-image-2_p1a3mh.jpg" alt= "about placeholder" className="about-image" />
            <img src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578378875/Salon-n-Spa/about-images/about-image-1_xarj2f.jpg" alt= "about placeholder" className="about-image" />
            <img src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578383064/Salon-n-Spa/about-images/noah-buscher-eCJiD00AJqs-unsplash_xqtxgl.jpg" alt= "about placeholder" className="about-image" />
          </div>
        </div>
      </div>
    );
  }
}
