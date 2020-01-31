import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="wrapper-footer section" style={{paddingTop: "5%"}}>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="header is-size-4 has-text-weight-bold">Information</p>
              <p>
              About Aadya Beauty Adda, it is located in Ved Nath Puram, Aziz Nagar, Madiyanva, Lucknow, Uttar Pradesh. We are a dedicated team of beauticians aestheticians that aim to provide outstanding service to all of our customers. Come visit us today and enjoy our relaxing atmosphere while we make you look AMAZING.
              </p>
            </div>
            <div className="column">
              <p className="header is-size-4 has-text-weight-bold">
                Subscribe to our newsletter below
              </p>
              <div class="field has-addons">
                <div class="control">
                  <input
                    className="input is-normal"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="control">
                  <a class="button is-info is-normal">Submit</a>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
