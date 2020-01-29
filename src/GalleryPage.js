import React, { Component } from "react";
import FooterOther from "./components/FooterOther";
import HeadingUnderline from "./components/HeadingUnderline";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import MakeupTab from "./elements/MakeupTab";
import CosmeticsTab from "./elements/CosmeticsTab";
import HairTab from "./elements/HairTab";
import SpaTab from "./elements/SpaTab";
import AllImagesTab from "./elements/AllImagesTab";

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
              <TabPane tab="All categories" key="1">
                <AllImagesTab />  
              </TabPane>
              <TabPane tab="Cosmetics" key="2">
                <CosmeticsTab />
              </TabPane>
              <TabPane tab="Hair" key="3">
                <HairTab />
              </TabPane>
              <TabPane tab="Spa" key="4">
                <SpaTab />
              </TabPane>
              <TabPane tab="Makeup" key="4">
                <MakeupTab />
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
