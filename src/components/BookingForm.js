import React, { Component } from "react";
import DatePicker from "react-date-picker";

export default class BookingForm extends Component {
  state = {
    date: new Date()
  };
  onChange = date => this.setState({ date });
  render() {
    return (
      <div>
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Phone Number</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Choose Date</label>
            <DatePicker onChange={this.onChange} value={this.state.date} />
          </div>
        </form>
      </div>
    );
  }
}
