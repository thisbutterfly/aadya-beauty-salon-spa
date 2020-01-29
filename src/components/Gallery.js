import React, { Component } from "react";
import HeadingUnderline from "./HeadingUnderline";
import {Link} from "react-router-dom";

export default class Gallery extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Gallery</h1>
        <HeadingUnderline />
        <div className="container">
          <div className="gallery-images">
            {imagesList.map(images => (
              <>
                <img src={images.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
          <div className="container button-contain">
          <Link to="/gallery">
              <button
                className="appointment-button"
                style={{marginTop: "3%"}}
              >
                SEE MORE
              </button>
          </Link>
            </div>
        </div>
      </div>
    );
  }
}

const imagesList = [
  {
    imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_300,h_300/v1580300356/Salon-n-Spa/cosmetics/cosmetics4_nxy1uu.jpg"
},
{
    imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_300,h_300/v1580300355/Salon-n-Spa/cosmetics/cosmetics_f3fxfj.jpg"
},
{
    imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_300,h_300/v1580300356/Salon-n-Spa/cosmetics/cosmetics3_ydm6bx.jpg"
},
{
    imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_300,h_300/v1580300355/Salon-n-Spa/cosmetics/cosmetics2_zp5kok.jpg"
},
{
    imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_300,h_300/v1580299742/Salon-n-Spa/hair/hair5_tucijr.jpg"
},
{
    imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_300,h_300/v1580299742/Salon-n-Spa/hair/hair4_n1dghd.jpg"
},
];
