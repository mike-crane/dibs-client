import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requiresLogin from "./Requires-login";
import {
  setSelectedProperty,
  clearSelectedDate
} from "../actions/protected-data";
import FaPlus from "react-icons/lib/fa/plus";
import "../stylesheets/properties.css";

class Properties extends Component {
  onPropertySelect(property, username) {
    this.props.dispatch(setSelectedProperty(property, username));
    this.props.dispatch(clearSelectedDate());
  }

  render() {
    let username = this.props.username;

    let propertyList = this.props.properties.map(property => (
      <div
        className="property-container"
        key={property.id}
        onClick={() => this.onPropertySelect(property, username)}
      >
        <img
          className="property-thumbnail"
          tabIndex="0"
          src={property.thumbUrl}
          alt={property.name}
        />
        <div className="middle">
          <div className="text">{property.name}</div>
        </div>
      </div>
    ));

    let propertiesHeading = <h3>Select a Property</h3>;

    // check if any properties have been created yet, and if not prompt user to add one
    if (this.props.properties.length === 0) {
      propertiesHeading = <h3>Click the button below to add a property</h3>;
    }

    return (
      <div className="properties">
        {propertiesHeading}
        <div className="property-thumbnails">
          {propertyList}
          <Link
            className="add-property-button"
            aria-label="add property"
            to="/add-property"
          >
            <FaPlus />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    properties: state.protectedData.properties,
    reservations: state.protectedData.reservations
  };
};

export default requiresLogin()(connect(mapStateToProps)(Properties));
