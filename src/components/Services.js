import React, { Component } from "react";
import HeadingUnderline from "./HeadingUnderline";

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
                alt="service-image"
              />
            </div>
            <div className="column">
              <p className="subtitle has-text-black-ter is-size-4">
                Best services around you
              </p>
              <ul>
                {servicesList.map(services => (
                  <>
                    <li
                      className="columns is-vcentered"
                      style={{ padding: "5px" }}
                    >
                      <img
                        src="https://res.cloudinary.com/dkksvxoms/image/upload/v1578396776/Salon-n-Spa/service-images/check_xgwrto.png"
                        className="check-icon"
                        alt="service-list"
                      />
                      <span className="service-option">{services.item}</span>
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
    item: "Nail treatments and manicure"
  },
  {
    item: "Facial Bleach and skin care treatments"
  },
  {
    item: "De-Tanning"
  },
  {
    item: "Massages"
  },
  {
    item: "Pedicure"
  },
  {
    item: "Threading"
  },
  {
    item: "Hair Spa"
  },
  {
    item: "Lotus whitening facial"
  },
  {
    item: "Other packages and offera worth your money and time"
  }
];
