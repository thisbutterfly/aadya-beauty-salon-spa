import React, { Component } from "react";
import ReactPlayer from "react-player";
import HeadingUnderline from "./components/HeadingUnderline";
import FooterOther from "./components/FooterOther";
import {Link} from "react-router-dom"

export default class BlogPage extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Blog</h1>
        <HeadingUnderline />
        <div className="container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=uMOt1OshOJ8"
            playing
            controls
            style={{ margin: "0 auto"}}
            className="video-player"
          />
          <div className="blog-cards">
            {BlogList.map(blog => (
              <div className="card">
                <div className="card-image">
                  <img
                    src={blog.image}
                    alt="Placeholder image"
                  />
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{blog.title}</p>
                    </div>
                  </div>
                  <div className="content">
                    {blog.link}
                    <br />
                  </div>
                <Link to="/article">
                <p>Read More..</p>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterOther />
      </div>
    );
  }
}

const BlogList = [
  {
    image: "https://via.placeholder.com/300x250",
    title: "Beauty tips",
    link:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris."
  },
  {
    image: "https://via.placeholder.com/300x250",
    title: "Beauty tips",
    link:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris."
  },
  {
    image: "https://via.placeholder.com/300x250",
    title: "Beauty tips",
    link:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris."
  },
  {
    image: "https://via.placeholder.com/300x250",
    title: "Beauty tips",
    link:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris."
  }
];
