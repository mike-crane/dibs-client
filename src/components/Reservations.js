import React, { Component } from "react";
import { connect } from "react-redux";
import requiresLogin from "./Requires-login";
import Properties from "./Properties";
import PropertyDetails from "./Property-details";
import ReservationDetails from "./Reservation-details";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import ReactModal from "react-modal";
import Close from "react-icons/lib/io/close-round";
import Trash from "react-icons/lib/ti/trash";
import {
  setSelectedDate,
  fetchPropertyData,
  fetchReservationData,
  showSelectedReservation,
  showModal,
  hideModal,
  clearSelectedReservation,
  deleteReservation
} from "../actions/protected-data";
import "../stylesheets/reservations.css";
import "../stylesheets/modal.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
ReactModal.setAppElement("#root");

export class Reservations extends Component {
  componentWillMount() {
    this.props.dispatch(fetchPropertyData());
    this.props.dispatch(fetchReservationData());
  }

  onDateSelect(slotInfo) {
    this.props.dispatch(setSelectedDate(slotInfo)); 
  }

  handleSelectEvent(event) {
    this.props.dispatch(showModal());
    this.props.dispatch(showSelectedReservation(event));
  }

  handleCloseModal() {
    this.props.dispatch(hideModal());
    this.props.dispatch(clearSelectedReservation());
  }

  handleDeleteRes(id, reservation) {
    this.props.dispatch(deleteReservation(id, reservation));
    this.props.dispatch(hideModal());
    this.props.dispatch(fetchReservationData());
  }

  render() {
    let deleteButton;

    // check if user is the own who made the reservation and if true render the delete button
    if (this.props.selectedReservation.guest === this.props.username) {
      deleteButton = (
        <button
          className="delete-res-button"
          aria-label="delete"
          onClick={() =>
            this.handleDeleteRes(
              this.props.selectedReservation.id,
              this.props.reservations
            )
          }
        >
          <Trash />
        </button>
      );
    }

    let events = this.props.reservations.map((reservation, index) => {
      return {
        id: `${reservation.id}`,
        title: `${reservation.propertyName}`,
        guest: `${reservation.username}`,
        start: new Date(reservation.start),
        end: new Date(reservation.end),
        resourceId: index
      };
    });

    // check if a property has been selected and if so, show the property details and calendar
    if (this.props.selectedProperty) {
      return (
        <div className="reservations">
          <h2>Reservations</h2>
          <Properties />
          <h3>Drag the mouse over the calendar to select a date/time range</h3>
          <div className="reservation-section">
            <div className="selected-property">
              <PropertyDetails />
            </div>
            <div className="reservation-info">
              <ReservationDetails />
            </div>
          </div>
          <div className="calendar-container">
            <BigCalendar
              selectable
              events={events}
              views={["month"]}
              longPressThreshold={100}
              onSelectSlot={slotInfo => this.onDateSelect(slotInfo)}
              onSelectEvent={event => this.handleSelectEvent(event)}
            />
          </div>
          <ReactModal
            className="modal-content"
            overlayClassName="modal-overlay"
            isOpen={this.props.showModal}
            contentLabel="Reservation Details"
          >
            <h2>{this.props.selectedReservation.title}</h2>
            <p>
              <strong>
                {this.props.selectedReservation.guest} has reserved this
                property
              </strong>
            </p>
            <p className="modal-dates">
              <strong>From:</strong>
              &nbsp;&nbsp;&nbsp;
              {moment(this.props.selectedReservation.start).format("dddd, ")}
              &nbsp;{" "}
              {moment(this.props.selectedReservation.start).format("MMM Do")}
            </p>
            <p className="modal-dates">
              <strong>To:</strong>
              &nbsp;&nbsp;&nbsp;
              {moment(this.props.selectedReservation.end).format("dddd, ")}
              &nbsp;{" "}
              {moment(this.props.selectedReservation.end).format("MMM Do")}
            </p>
            <button
              className="modal-button"
              onClick={() => this.handleCloseModal()}
              aria-label="close"
            >
              <Close />
            </button>
            {deleteButton}
          </ReactModal>
        </div>
      );
    } else {
      return (
        <div className="reservations">
          <h2>Reservations</h2>
          <Properties />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties,
    reservations: state.protectedData.reservations,
    currentReservation: state.protectedData.currentReservation,
    selectedProperty: state.protectedData.selectedProperty,
    showModal: state.protectedData.showModal,
    selectedReservation: state.protectedData.selectedReservation
  };
};

export default requiresLogin()(connect(mapStateToProps)(Reservations));
