import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from "react-modal";
import Close from "react-icons/lib/io/close-round";
import { postReservationData, showModal, hideModal } from "../actions/protected-data";
import '../stylesheets/reservation-details.css';
import "../stylesheets/modal.css";
ReactModal.setAppElement("#root");

class ReservationDetails extends Component {
  onPostReservationData(event) {
    this.props.dispatch(postReservationData(this.props.currentReservation));
    this.props.dispatch(showModal());
    event.preventDefault();
  }

  handleCloseModal() {
    this.props.dispatch(hideModal());
  }

  render() {
    let options = { weekday: "long", month: "short", day: "numeric" };

    if (this.props.currentReservation.propertyID) {
      return (
        <div className="reservation-details">
          <h4>Reserve this Property</h4>
          <form onSubmit={e => this.onPostReservationData(e)}>
            <div className="res-block">
              <label htmlFor="res-name">Guest: </label>
              <input
                id="res-name"
                type="text"
                readOnly
                value={this.props.name}
              />
            </div>

            <div className="res-block">
              <label htmlFor="res-start">From: </label>
              <input
                id="res-start"
                type="text"
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
                readOnly
                value={this.props.currentReservation.end.toLocaleString(
                  "en-US",
                  options
                )}
              />
            </div>

            <button>Save Reservation</button>
          </form>
          <ReactModal
            className="modal-content"
            overlayClassName="modal-overlay"
            isOpen={this.props.showModal}
            contentLabel="Reservation Confirmation"
          >
            <h2>Testing</h2>
            <button
              className="modal-button"
              onClick={() => this.handleCloseModal()}
            >
              <Close />
            </button>
          </ReactModal>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return { 
    username: state.auth.currentUser.username, 
    name: `${currentUser.firstName} ${currentUser.lastName}`, 
    currentReservation: state.protectedData.currentReservation,
    reservations: state.protectedData.reservations,
    showModal: state.protectedData.showModal
  };
};

export default (connect(mapStateToProps)(ReservationDetails));