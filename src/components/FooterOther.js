import React, { Component } from "react";

export default class FooterOther extends Component {
  render() {
    return (
      <div className="wrapper-footer-other section">
        <div className="container">
          <div className="content-wrapper">
            <div className="information">
              <p className="header is-size-4 has-text-weight-bold">
                Information
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <p className="header is-size-4 has-text-weight-bold">
                Subscribe to our newsletter below
              </p>
              <div class="field has-addons">
                <div class="control">
                  <input
                    className="input is-normal"
                    type="text"
                    placeholder="Find a repository"
                  />
                </div>
                <div class="control">
                  <a class="button is-info is-normal">Search</a>
                </div>
              </div>
              <br />
            </div>
          </div>
          <p className="footer-text">
            2020 Built with <span>❤️</span> by
            {` `}
            <a href="http://sjjs.in/" className="hyperLink">
              S.J.J.S. Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    );
  }
}
