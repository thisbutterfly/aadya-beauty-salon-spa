import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";

export default class Booking extends Component {
  render() {
    return (
      <div className="section colored-wrapper">
        <h1 className="is-size-1 has-text-centered">Appointment</h1>
        <HeadingUnderline />
        <div className="container">
          <p className="subtitle has-text-centered has-black-ter is-size-4">
            Want to make a booking or have a question?
          </p>
          <div className="container button-contain">
            <button className="appointment-button">MAKE AN APPOINTMENT</button>
          </div>
        </div>
      </div>
    );
  }
}
