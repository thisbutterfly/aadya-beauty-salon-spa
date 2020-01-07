import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroPanel from "./HeroPanel";
import About from "./About";
import Services from "./Services";
import Booking from "./Booking";

function App() {
  return (
    <div>
      <Navbar />
      <HeroPanel />
      <About />
      <Services />
      <Booking />
    </div>
  );
}

export default App;
