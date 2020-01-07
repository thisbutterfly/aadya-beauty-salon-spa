import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";

export default class Services extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Services we offer</h1>
        <HeadingUnderline />
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578381962/Salon-n-Spa/service-images/services-image_upw6jw.jpg" className="service-image" />
            </div>
            <div className="column">
              <p className="subtitle">Best services around you</p>
              <ul>
                <li>hair-cutting, colouring and styling</li>
                <li>waxing and other forms of hair removal</li>
                <li>nail treatments</li>
                <li>facials and skin care treatments</li>
                <li>tanning</li>
                <li>massages</li>
                <li>complementary care such as aromatherapy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
