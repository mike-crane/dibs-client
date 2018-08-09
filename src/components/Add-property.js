import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postPropertyData } from '../actions/protected-data';
import '../stylesheets/edit-property.css';

class AddProperty extends Component {

  onSubmit(values) {
    console.log(values);
    this.props.dispatch(postPropertyData(values));
  }

  render() {
    return <div className="new-property">
        <h2>New Propery</h2>
        <form className="list-property" onSubmit={this.props.handleSubmit(
            values => this.onSubmit(values)
          )}>
          <div className="form-section">
            <label htmlFor="name" className="address-name">
              Property name
            </label>
            <Field component={Input} type="text" name="name" id="name" autoComplete="off" />
          </div>

          <fieldset>
            <legend>Property Address</legend>
            <div className="form-section">
              <label htmlFor="street" className="address-label">
                Street
              </label>
              <Field component={Input} type="text" name="street" id="street" autoComplete="off" />
            </div>

            <div className="form-section">
              <label htmlFor="city" className="address-label">
                City
              </label>
              <Field component={Input} type="text" name="city" id="city" autoComplete="off" />
            </div>

            <div className="form-section">
              <label htmlFor="state" className="address-label">
                State
              </label>
              <Field component={Input} type="text" name="state" id="state" autoComplete="off" />
            </div>

            <div className="form-section">
              <label htmlFor="zipcode" className="address-label">
                Zip Code
              </label>
              <Field component={Input} type="text" name="zipcode" id="zipcode" autoComplete="off" />
            </div>
          </fieldset>

          <div className="form-section">
            <label htmlFor="type" className="property-label">
              Property type
            </label>
            <Field name="type" id="type" component="select" required>
              <option value="select">Select Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
            </Field>
          </div>

          <div className="form-section">
            <label htmlFor="thumbUrl" className="property-photo">
              Property Image Address
            </label>
            {/* <input type="file" onChange={this.fileSelectedHandler} /> */}
            <Field component={Input} type="text" name="thumbUrl" autoComplete="off" />
          </div>

          <button className="save-property-button" type="submit" disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
          <Link className="cancel-button" to="/reservations">
            Cancel
          </Link>
        </form>
      </div>;
  }
}

const mapStateToProps = state => ({
  properties: state.protectedData.properties,
  selectedProperty: state.protectedData.selectedProperty
});

export default reduxForm({
  form: 'addProperty',
  // onSubmitSuccess: console.log('Property has been added successfully!')
})(connect(mapStateToProps)(AddProperty));