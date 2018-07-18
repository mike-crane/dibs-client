import React from 'react';
import Placeholder from '../images/img-placeholder.png';
import "../stylesheets/properties.css";

const Properties = () => {
  return (
    <div className="properties">
      <h3>Properties</h3>
      <div className="property-thumbnails">
        <img src={Placeholder} alt="placeholder" />
        <img src={Placeholder} alt="placeholder" />
        <img src={Placeholder} alt="placeholder" />
        <button type="button">Add Property</button>
      </div>
    </div>
  )
};

export default Properties;
