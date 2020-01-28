import React, { Component } from "react";
// import HeadingUnderline from "./components/HeadingUnderline";
import FooterOther from "./components/FooterOther";
import ContactUs from "./components/ContactUs";

export default class ContactPage extends Component {
  render() {
    return (
      <div style={{marginTop: "5%"}}>
        <ContactUs />
        <div style={{marginTop: "10%"}}>
          <FooterOther />
        </div>
      </div>
    );
  }
}
