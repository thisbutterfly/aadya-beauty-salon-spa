import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Dropdown } from "react-bulma-components";

export default class BookingForm extends Component {
  state = {
    date: new Date(),
    selected: ""
  };
  onChange = (selected, date) => {
    this.setState({ selected, date });
  };
  render() {
    return (
      <Dropdown.Item>
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <br />

          <Dropdown onChange={action("select")} label={text("label", "")}>
            <Dropdown.Item value="item">Select Services</Dropdown.Item>
            <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
            <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
            <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
          </Dropdown>
          
          <div className="field">
          <br />
            <label className="label">Choose Date</label>
            <DatePicker onChange={this.onChange} value={this.state.date} />
          </div>
        </form>
      </Dropdown.Item>
    );
  }
}
