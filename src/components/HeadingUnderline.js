import React, { Component } from "react";

export default class HeadingUnderline extends Component {
  render() {
    return (
      <div className="section header-underline">
        <div className="columns">
          <div
            className="column"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <hr className="design-line" />
          </div>
          <div className="rose" />
          <div className="column">
            <hr className="design-line" />
          </div>
        </div>
      </div>
    );
  }
}
