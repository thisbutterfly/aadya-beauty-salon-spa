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
            <a href="tel:9305164178">
              <p className="subtitle is-size-5">91-9305164178</p>
            </a>
          </div>
          <div className="contact-wrap column has-text-weight-bold">
            <p className="header is-size-4">Email us: </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aadyabeautyadda@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="subtitle is-size-5">aadyabeautyadda@gmail.com</p>
            </a>
          </div>
          <div className="contact-wrap-two column has-text-weight-bold">
            <p className="header is-size-4">Address: </p>
            <p className="subtitle is-size-5">
              Ved Nath Puram, Aziz Nagar, Madiyanva, Lucknow, Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
