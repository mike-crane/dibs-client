import React, { Component } from "react";
import { connect } from "react-redux";
import {
  postReservationData,
  clearSelectedDate
} from "../actions/protected-data";
import "../stylesheets/reservation-details.css";
import "../stylesheets/modal.css";

class ReservationDetails extends Component {
  onPostReservationData(event) {
    this.props.dispatch(postReservationData(this.props.currentReservation));
    this.props.dispatch(clearSelectedDate());
    event.preventDefault();
  }

  render() {
    let options = { weekday: "long", month: "short", day: "numeric" };

    let saveReservationButton;

    // check if a date selection has been made and if so, render the save reservation button
    if (this.props.currentReservation.start) {
      saveReservationButton = <button tabIndex="0">Save Reservation</button>;
    }

    return (
      <div className="reservation-details">
        <h4>Reserve this Property</h4>
        <form onSubmit={e => this.onPostReservationData(e)}>
          <div className="res-block">
            <label htmlFor="res-name">Guest: </label>
            <input
              id="res-name"
              type="text"
              tabIndex="-1"
              readOnly
              value={this.props.name}
            />
          </div>
          <div className="res-block">
            <label htmlFor="res-start">From: </label>
            <input
              id="res-start"
              type="text"
              tabIndex="-1"
              readOnly
              value={this.props.currentReservation.start.toLocaleString(
                "en-US",
                options
              )}
            />
          </div>
          <div className="res-block">
            <label htmlFor="res-end">To: </label>
            <input
              id="res-end"
              type="text"
              tabIndex="-1"
              readOnly
              value={this.props.currentReservation.end.toLocaleString(
                "en-US",
                options
              )}
            />
          </div>
          {saveReservationButton}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    currentReservation: state.protectedData.currentReservation,
    reservations: state.protectedData.reservations
  };
};

export default connect(mapStateToProps)(ReservationDetails);
