import React from "react";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import BlogPage from "./BlogPage";
import BookingPage from "./BookingPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import GalleryPage from "./GalleryPage";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbarMenu">
        <div className="container navWide">
          <div className="logo">
            <img src="https://via.placeholder.com/200x50" />
          </div>
          <div className="wideDiv">
            <Link to="/">
              <div className="item">HOME</div>
            </Link>
            <Link to="/about">
              <div className="item">ABOUT</div>
            </Link>
            <Link to="/services">
              <div className="item">SERVICES</div>
            </Link>
            <Link to="/booking">
              <div className="item">BOOKING</div>
            </Link>
            <Link to="/blog">
              <div className="item">BLOG</div>
            </Link>
            <Link to="/gallery">
              <div className="item">GALLERY</div>
            </Link>
            <Link to="/contact">
              <div className="item">CONTACT US</div>
            </Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/booking" component={BookingPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
