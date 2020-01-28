import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";
import BookingForm from "./components/BookingForm";

export default class BookingPage extends Component {
  state = {
    openFormModal: false
  };

  openForm = () => {
    this.setState({
      openFormModal: true
    });
    console.log("working")
  };

  closeForm = () => {
    this.setState({
      openFormModal: false
    });
  };

  render() {
    const { openFormModal } = this.state;
    return (
      <>
        {openFormModal ? (
          <div className="modal" style={{display: "block"}}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Booking Form</p>
                <button className="delete" aria-label="close" onClick= {()=> this.closeForm()}></button>
              </header>
              <section className="modal-card-body">
                <BookingForm />
              </section>
              <footer className="modal-card-foot">
                <button className="appointment-button" onClick={() => this.closeForm()}>
                  Return
                </button>
              </footer>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="section">
          <h1 className="is-size-1 has-text-centered">Appointment</h1>
          <HeadingUnderline />
          <div className="container">
            <p className="subtitle has-text-centered has-black-ter is-size-4">
              Want to make a booking or have a question?
            </p>
            <div className="container button-contain">
              <button
                className="appointment-button"
                onClick={() => this.openForm()}
              >
                MAKE AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
