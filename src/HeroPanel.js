import React, { Component } from "react";

export default class HeroPanel extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="hero is-large">
          <div className="hero-body">
            <div className="container">
              <h1 className="is-size-1" >Beauty & Spa Salon</h1>
              <h2 className="subtitle has-text-black-ter">
                Rest & Relax. Enjoy some much needed me time during a three-hour
                spa session.
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
