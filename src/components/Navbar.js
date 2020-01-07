import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbarMenu">
          <div className="container navWide">
            <div className="logo">
              <img src="https://via.placeholder.com/200x50" />
            </div>
            <div className="wideDiv">
              <a href="#" className="hyperLink">
                <div className="item">HOME</div>
              </a>
              <a href="#" className="hyperLink">
                <div className="item">ABOUT</div>
              </a>
              <a href="#" className="hyperLink">
                <div className="item">SERVICES</div>
              </a>
              <a href="#" className="hyperLink">
                <div className="item">BOOKING</div>
              </a>
              <a href="#" className="hyperLink">
                <div className="item">BLOG</div>
              </a>
              <a href="#" className="hyperLink">
                <div className="item">GALLERY</div>
              </a>
              <a href="#" className="hyperLink">
                <div className="item">CONTACT US</div>
              </a>
            </div>
          </div>

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
        </nav>
      </div>
    );
  }
}
