import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../stylesheets/property-details.css";

const PropertyDetails = (props) => {
  if (props.property) {
    return <div className="property-details">
        <h3>Property Details</h3>
        <div className="property-image">
          <img src={props.property.thumbUrl} alt="placeholder" />
        </div>
        <div className="property-info">
          <ul>
            <li>{props.property.name}</li>
            <li>
              {props.property.address.city}, {props.property.address.state}
            </li>
          </ul>
        </div>
        <Link className="edit-property-button" to="/edit-property">
          Edit
        </Link>
      </div>;
  } else {
    return <div></div>;
  }
  
}

const mapStateToProps = state => {
  return {
    property: state.protectedData.selectedProperty
  };
};

export default (connect(mapStateToProps)(PropertyDetails));
