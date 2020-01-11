import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Contact Us</h1>
        <HeadingUnderline />
        <div className="container"></div>
      </div>
    );
  }
}
