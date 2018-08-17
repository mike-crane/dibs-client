import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { required, nonEmpty } from "../validators";
import { postPropertyData } from '../actions/protected-data';
import '../stylesheets/edit-property.css';

class AddProperty extends Component {
  onSubmit(values) {
    values.owner = this.props.username;
    if (!values.thumbUrl) {
      values.thumbUrl = "https://github.com/mike-crane/dibs-client/blob/master/src/images/default-property.png?raw=true";
    }
    this.props.dispatch(postPropertyData(values));
    this.props.history.push("/reservations");
  }

  render() {
    return <div className="new-property">
        <h2>New Property</h2>
        <form className="list-property" autoComplete="off" onSubmit={this.props.handleSubmit(
            values => this.onSubmit(values)
          )}>
          <div className="form-section">
            <label htmlFor="name" className="address-name">
              Property name
            </label>
            <Field component={Input} type="text" name="name" id="name" validate={[required, nonEmpty]} />
          </div>

          <fieldset>
            <legend>Property Address</legend>
            <div className="form-section">
              <label htmlFor="street" className="address-label">
                Street
              </label>
              <Field component={Input} type="text" name="street" id="street" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
              <label htmlFor="city" className="address-label">
                City
              </label>
              <Field component={Input} type="text" name="city" id="city" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
              <label htmlFor="state" className="address-label">
                State
              </label>
              <Field component={Input} type="text" name="state" id="state" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
              <label htmlFor="zipcode" className="address-label">
                Zip Code
              </label>
              <Field component={Input} type="text" name="zipcode" id="zipcode" validate={[required, nonEmpty]} />
            </div>
          </fieldset>

          <div className="form-section">
            <label htmlFor="type" className="property-label">
              Property type
            </label>
            <Field name="type" id="type" component="select" validate={[required, nonEmpty]}>
              <option value="select">Select Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="apartment">Apartment</option>
            </Field>
          </div>

          <div className="form-section">
            <label htmlFor="thumbUrl" className="property-photo">
              Image Url <span>(optional)</span>
            </label>
          <Field component={Input} type="url" name="thumbUrl" required pattern=".*\.png\." />
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
  username: state.auth.currentUser.username,
  properties: state.protectedData.properties,
  selectedProperty: state.protectedData.selectedProperty
});

export default reduxForm({
  form: "addProperty"
})(connect(mapStateToProps)(AddProperty));