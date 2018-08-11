import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReservationData, showModal, hideModal, showSelectedReservation } from "../actions/protected-data";
import requiresLogin from './Requires-login';
import Ribbon from './Ribbon';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import ReactModal from "react-modal";
import Close from "react-icons/lib/io/close-round";
import '../stylesheets/dashboard.css';
import "../stylesheets/modal.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
ReactModal.setAppElement("#root");

class Dashboard extends Component {
  componentWillMount() {
    this.props.dispatch(fetchReservationData());
  }

  handleSelectEvent(event) {
    this.props.dispatch(showModal());
    this.props.dispatch(showSelectedReservation(event));
  }

  handleCloseModal() {
    this.props.dispatch(hideModal());
  }

  render() {
    let options = { weekday: "long", month: "long", day: "numeric" };

    let events = this.props.reservations.map((reservation, index) => {
      return {
        id: index,
        title: `${reservation.propertyName}`,
        guest: `${reservation.username}`,
        start: new Date(reservation.start),
        end: new Date(reservation.end),
        resourceId: index
      };
    });

    let reservations = this.props.reservations.map((reservation, index) => (
      <p key={index}>
        {reservation.propertyName} {reservation.start}
      </p>
    ));

    return <div className="dashboard">
        <div className="welcome-message">
          <h2>Welcome {this.props.username}</h2>
        </div>
        <div className="dashboard-container">
          <div className="dashboard-protected-data">
            <Ribbon heading="Active Reservations" subheading="" />
            {reservations}
            <Link className="reservations-button" to="/reservations">
              Reserve a Property
            </Link>
          </div>
          <div className="dashboard-calendar-container">
            <BigCalendar events={events} views={["month"]} onSelectEvent={event => this.handleSelectEvent(event)} />
          </div>
          <ReactModal className="modal-content" overlayClassName="modal-overlay" isOpen={this.props.showModal} contentLabel="Reservation Details">
            <h2>{this.props.selectedReservation.title}</h2>
            <p><span>Reserved by:</span> {this.props.selectedReservation.guest}</p>
            <p><span>From:</span> {this.props.selectedReservation.start.toLocaleString("en-US", options)}</p>
            <p><span>To:</span> {this.props.selectedReservation.end.toLocaleString("en-US", options)}</p>
            <button className="modal-button" onClick={() => this.handleCloseModal()}>
              <Close />
            </button>
          </ReactModal>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties,
    reservations: state.protectedData.reservations,
    showModal: state.protectedData.showModal,
    selectedReservation: state.protectedData.selectedReservation
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));