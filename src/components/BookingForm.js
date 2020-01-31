import React, { Component } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";

const API_PATH = "https://localhost:3000";
export default class BookingForm extends Component {
  state = {
    date: new Date(),
    selected: "",
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    mailSent: false,
  };
  onChange = (selected, date) => {
    this.setState({ selected, date });
  };

  handleFormSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <form action="/action_page.php">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              required
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
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
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
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
              value={this.state.phoneNumber}
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </div>
        </div>
        <br />
        <label className="label">Select Services</label>

        {servicesList.map(services => (
          <div className="">
            <label class="checkbox">
              <input
                type="checkbox"
                value={this.state.service}
                onChange={e => this.setState({ service: e.target.value })}
              />
              {services.itemName}
            </label>
          </div>
        ))}

        <div className="field">
          <br />
          <label className="label">Choose Date</label>
          <DatePicker onChange={this.onChange} value={this.state.date} />
        </div>
        <button
          className="appointment-button"
          onClick={e => this.handleFormSubmit(e)}
        >
          Submit
        </button>
        <div>
          {this.state.mailSent && <div>Thank you for contcting us.</div>}
        </div>
      </form>
    );
  }
}

const servicesList = [
  {
    itemName: "Face Bleach"
  },
  {
    itemName: "De Tan"
  },
  {
    itemName: "Half arms wax"
  },
  {
    itemName: "Full arms wax"
  },
  {
    itemName: "Half legs wax"
  },
  {
    itemName: "Full legs wax"
  },
  {
    itemName: "Threading upplerlips"
  },
  {
    itemName: "Threading eyebrows"
  },
  {
    itemName: "Upperlips waxing"
  },
  {
    itemName: "Manicure"
  },
  {
    itemName: "Pedicure"
  },
  {
    itemName: "Face Bleach"
  },
  {
    itemName: "Oil Hair massage"
  },
  {
    itemName: "Hair Spa"
  }
];
