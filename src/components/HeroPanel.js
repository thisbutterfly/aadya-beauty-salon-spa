import React, { Component } from "react";

export default class HeroPanel extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <img
                src="https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_150,h_150/v1580300932/Salon-n-Spa/adda_fkoayt.png"
                alt="logo-placeholder"
              />
              <h1 className="is-size-1 has-text-white-bis">
                Aadya Beauty Adda
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
