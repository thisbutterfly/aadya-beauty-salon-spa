import React, { Component } from "react";
// import HeadingUnderline from "./components/HeadingUnderline";
import Services from "./components/Services";
import FooterOther from "./components/FooterOther";

export default class ServicesPage extends Component {
  render() {
    return (
      <>
        <Services />
        <FooterOther /> 
      </>
    );
  }
}
