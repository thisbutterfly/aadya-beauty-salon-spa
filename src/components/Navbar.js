import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import GalleryPage from "../GalleryPage";
export default class Navbar extends Component {
  render() {
    return (
      // <Router>
        <div>
          <nav className="navbarMenu">
            <div className="container navWide">
              <div className="logo">
                <img src="https://via.placeholder.com/200x50" />
              </div>
              <div className="wideDiv">
                {/* <Link to="/"> */}
                  <div className="item">HOME</div>
                {/* </Link> */}
                {/* <Link to="/about"> */}
                  <div className="item">ABOUT</div>
                {/* </Link> */}
                {/* <Link to="/services"> */}
                  <div className="item">SERVICES</div>
                {/* </Link> */}
                {/* <Link to="/booking"> */}
                  <div className="item">BOOKING</div>
                {/* </Link> */}
                {/* <Link to="/blog"> */}
                  <div className="item">BLOG</div>
                {/* </Link> */}
                {/* <Link to="/gallery"> */}
                  <div className="item">GALLERY</div>
                {/* </Link> */}
                {/* <Link to="/item"> */}
                  <div className="item">CONTACT US</div>
                {/* </Link> */}
              </div>
            </div>
          </nav>
        </div>
    );
  }
}

{/* <Switch>
  <Route path="/gallery" component={GalleryPage}/>
</Switch>
</Router> */}

            {/* <div className="navNarrow">
            <div className="logo">
              <img src="https://via.placeholder.com/200x70" />
            </div>
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
            <div className="narrowLinks">
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">HOME</div>
              </a>
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">ABOUT</div>
              </a>
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">SERVICES</div>
              </a>
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">BOOKING</div>
              </a>
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">BLOG</div>
              </a>
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">GALLERY</div>
              </a>
              <a href="#" onClick={() => this.burgerToggle()}>
                <div className="link">CONTACT US</div>
              </a>
            </div>
          </div> */}