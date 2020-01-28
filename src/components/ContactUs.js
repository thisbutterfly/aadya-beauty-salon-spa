import React, { Component } from "react";
import HeadingUnderline from "./HeadingUnderline";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="is-size-1 has-text-centered">Get In Touch</h1>
        <HeadingUnderline />
        <div className="contact-container columns">
          <div className="contact-wrap column has-text-weight-bold">
            <p className="header is-size-4">Call us at: </p>
            <p className="subtitle is-size-5">91-9350895820</p>
          </div>
          <div className="contact-wrap column has-text-weight-bold">
            <p className="header is-size-4">Email us: </p>
            <p className="subtitle is-size-5">vrlexpress.info@gmail.com</p>
          </div>
          <div className="contact-wrap-two column has-text-weight-bold">
            <p className="header is-size-4">Address: </p>
            <p className="subtitle is-size-5">
              Door No. 12/188, Thulasi Nagar.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
