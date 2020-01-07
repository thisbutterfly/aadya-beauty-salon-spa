import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";

export default class Services extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Services we offer</h1>
        <HeadingUnderline />
        <div className="container">
          <div className="columns">
            <div className="column">
              <img
                src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578381962/Salon-n-Spa/service-images/services-image_upw6jw.jpg"
                className="service-image"
              />
            </div>
            <div className="column">
              <p className="subtitle">Best services around you</p>
              <ul>
                {servicesList.map(services => (
                  <>
                    <li>
                    <img src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578396776/Salon-n-Spa/service-images/check_xgwrto.png" src="check-icon" />
                    {services.item}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const servicesList = [
  {
    item: "Hair-cutting, colouring and styling"
  },
  {
    item: "Waxing and other forms of hair removal"
  },
  {
    item: "Nail treatments"
  },
  {
    item: "Facials and skin care treatments"
  },
  {
    item: "Tanning"
  },
  {
    item: "Massages"
  },
  {
    item: "Complementary care such as aromatherapy"
  }
];
