import React, { Component } from "react";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import BlogPage from "./BlogPage";
import BookingPage from "./BookingPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import GalleryPage from "./GalleryPage";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    showDropdown: false
  };
  openDropwdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };
  closeDropdown = () => {
    this.setState({
      showDropdown: false
    });
  };
  render() {
    const { showDropdown } = this.state;
    return (
      <BrowserRouter>
        <nav className="navbarMenu">
          <div className="container navWide">
            <div className="logo">
              <img
                src="https://via.placeholder.com/200x50"
                alt="logo-placeholder"
              />
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
        <nav className="navbar-menu-mobile">
          <div className="container navWide">
            <div className="logo">
              <img src="https://via.placeholder.com/200x50" alt="logo" />
            </div>
            <h1
              className="is-size-3 has-text-white"
              onClick={() => this.openDropwdown()}
            >
              &#x2630;
            </h1>
          </div>
        </nav>
          {showDropdown ? (
            <div className="wide-div-mobile">
              <Link to="/" onClick= {()=> this.closeDropdown()}>
                <div className="item">HOME</div>
              </Link>
              <Link to="/about" onClick= {()=> this.closeDropdown()}>
                <div className="item">ABOUT</div>
              </Link>
              <Link to="/services" onClick= {()=> this.closeDropdown()}>
                <div className="item">SERVICES</div>
              </Link>
              <Link to="/booking" onClick= {()=> this.closeDropdown()}>
                <div className="item">BOOKING</div>
              </Link>
              <Link to="/blog" onClick= {()=> this.closeDropdown()}>
                <div className="item">BLOG</div>
              </Link>
              <Link to="/gallery" onClick= {()=> this.closeDropdown()}>
                <div className="item">GALLERY</div>
              </Link>
              <Link to="/contact" onClick= {()=> this.closeDropdown()}>
                <div className="item">CONTACT US</div>
              </Link>
            </div>
          ) : (
            ""
          )}
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
}
