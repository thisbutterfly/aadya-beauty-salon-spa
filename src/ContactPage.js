import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";
import FooterOther from "./components/FooterOther";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Contact Us</h1>
        <HeadingUnderline />
        <div className="container">
          <p className="subtitle has-text-centered has-text-black-ter is-size-5">
            Have any query or question? Reach us out.
          </p>
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
        <FooterOther />
      </div>
    );
  }
}
