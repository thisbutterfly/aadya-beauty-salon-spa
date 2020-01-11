import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroPanel from "./HeroPanel";
import About from "./About";
import Services from "./Services";
import Booking from "./Booking";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <HeroPanel />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <ContactUs />
    </div>
  );
}

export default App;
