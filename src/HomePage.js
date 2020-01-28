import React, { Component } from "react";
import HeroPanel from "./components/HeroPanel";
import About from "./components/About";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <HeroPanel />
        <About />
        <Services />
        <Booking />
        <Gallery />
        <ContactUs />
        <Footer />
      </>
    );
  }
}
