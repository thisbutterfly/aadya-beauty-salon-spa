import React, { Component } from "react";
import FooterOther from "./components/FooterOther";
import HeadingUnderline from "./components/HeadingUnderline";
import { Link } from "react-router-dom";
import $ from "jquery";
// import

export default class GalleryPage extends Component {
  render() {
    $(window).on('load',function() {
      var $container = $(".portfolioContainer");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });

      $(".portfolioFilter a").click(function() {
        $(".portfolioFilter .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    });
    return (
      <>
        <div className="section">
          <h1 className="is-size-1 has-text-centered">Gallery</h1>
          <HeadingUnderline />
          <div className="container">
            <div class="portfolioFilter clearfix">
              <a href="#" data-filter="*" class="current">
                All Categories
              </a>
              <a href="#" data-filter=".webTemplates">
                Spa
              </a>
              <a href="#" data-filter=".logos">
                Makeup
              </a>
              <a href="#" data-filter=".drawings">
                Hairdo
              </a>
              <a href="#" data-filter=".ui">
                Cosmetics
              </a>
            </div>

            <div className="gallery-images">
              {imagesList.map(images => (
                <div className={images.category}>
                  <img
                    src={images.imageLink}
                    alt="gallery-placeholder"
                    className="gallery-picture"
                  />
                </div>
              ))}
            </div>
            <div className="container button-contain">
              <Link to="/">
                <button
                  className="appointment-button"
                  style={{ marginTop: "3%" }}
                >
                  RETURN TO HOME
                </button>
              </Link>
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
    category: "makeup",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "hair",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "saloon",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "cosmetics",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "makeup",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "hair",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "saloon",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "cosmetics",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "makeup",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "hair",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "saloon",
    imageLink: "https://via.placeholder.com/300"
  },
  {
    category: "cosmetics",
    imageLink: "https://via.placeholder.com/300"
  }
];
