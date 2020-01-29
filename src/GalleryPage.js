import React, { Component } from "react";
import FooterOther from "./components/FooterOther";
import HeadingUnderline from "./components/HeadingUnderline";
import { Link } from "react-router-dom";
import { Tabs } from "antd";

export default class GalleryPage extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    const { TabPane } = Tabs;
    return (
      <>
        <div className="section">
          <h1 className="is-size-1 has-text-centered">Gallery</h1>
          <HeadingUnderline />
          <div className="container">
            <Tabs defaultActiveKey="1" onChange={() => this.callback()}>
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Tab 4" key="4">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
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
          <FooterOther />
        </div>
      </>
    );
  }
}