import React from 'react';
import { connect } from "react-redux";
import "../stylesheets/property-details.css";

const PropertyDetails = (props) => {
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
      <button id="edit-property" type="button">
        Edit
      </button>
    </div>;
}

const mapStateToProps = state => {
  return {
    property: state.protectedData.selectedProperty
  };
};

export default (connect(mapStateToProps)(PropertyDetails));
