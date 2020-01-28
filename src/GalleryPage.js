import React, { Component } from "react";
import FooterOther from "./components/FooterOther";
import HeadingUnderline from "./components/HeadingUnderline";

export default class GalleryPage extends Component {
  render() {
    return (
      <>
        <div className="section">
          <h1 className="is-size-1 has-text-centered">Gallery</h1>
          <HeadingUnderline />
          <div className="container">
            <div className="gallery-images">
              {imagesList.map(images => (
                <>
                  <img
                    src={images.imageLink}
                    alt="gallery-placeholder"
                    className="gallery-picture"
                  />
                </>
              ))}
            </div>
            <div className="container button-contain">
              <a href="/">
                <button
                  className="appointment-button"
                  style={{ marginTop: "3%" }}
                >
                  RETURN TO HOME
                </button>
              </a>
            </div>
          </div>
          <FooterOther />
        </div>
      </>
    );
  }
}

const imagesList = [
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  }
];
