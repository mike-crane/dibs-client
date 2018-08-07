import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../stylesheets/property-details.css';

const PropertyDetails = (props) => {
  if (props.property) {
    return (
      <div className="property-details">
        <div className="property-image">
          <img src={props.property.thumbUrl} alt={props.property.name} />
        </div>
        <div className="property-info">
        <h4>{props.property.name}</h4>
          <ul>
            <li>{props.property.address.street}</li>
            <li>
            {props.property.address.city}, {props.property.address.state} {props.property.address.zipcode}
            </li>
          </ul>
          <Link className="edit-property-button" to="/edit-property">Edit</Link>
        </div>
      </div>
    );
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
