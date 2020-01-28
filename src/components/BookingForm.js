import React, { Component } from "react";
import DatePicker from "react-date-picker";
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
        <label className="label">Select Services</label>

        {servicesList.map(services=>(
        <div className="">
          <label class="checkbox">
            <input type="checkbox" />
            {services.itemName}
          </label>
        </div>
        ))}

        <div className="field">
          <br />
          <label className="label">Choose Date</label>
          <DatePicker onChange={this.onChange} value={this.state.date} />
        </div>
      </form>
    );
  }
}


const servicesList = [
  {
    itemName : "Face Bleach"
  },
  {
    itemName : "De Tan"
  },
  {
    itemName : "Half arms wax"
  },
  {
    itemName : "Full arms wax"
  },
  {
    itemName : "Half legs wax"
  },
  {
    itemName : "Full legs wax"
  },
  {
    itemName : "Threading upplerlips"
  },
  {
    itemName : "Threading eyebrows"
  },
  {
    itemName : "Upperlips waxing"
  },
  {
    itemName : "Manicure"
  },
  {
    itemName : "Pedicure"
  },
  {
    itemName : "Face Bleach"
  },
  {
    itemName : "Oil Hair massage"
  },
  {
    itemName : "Hair Spa"
  }
]