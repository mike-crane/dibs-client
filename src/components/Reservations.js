import React, { Component } from 'react';
import Properties  from './Properties';
import PropertyDetails from './Property-details';
import "../stylesheets/reservations.css";

export class Reservations extends Component {

  render() {
    return (
      <div className="reservations">
        <h2>Reservations</h2>
        <Properties />
        <PropertyDetails />
        <p>[<em>Calendar Component goes here</em>]</p>
        <button id="reserve-property" type="button">Add to Calendar</button>
      </div>
    )
  }
}

export default Reservations
