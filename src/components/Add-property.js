import React, { Component } from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
// import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import '../stylesheets/edit-property.css';

class AddProperty extends Component {

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="new-property">
        <h2>New Propery</h2>
        <form className="list-property" onSubmit={this.props.handleSubmit(
            values => this.onSubmit(values)
          )}>
          {error}
          
          <div className="form-section">
          <label htmlFor="property-name" className="address-name">Property name</label>
            <Field component={Input} type="text" name="property-name" id="property-name" validate={[required, nonEmpty]} />
          </div>

          <fieldset>
            <legend>Property Type</legend>
            <div className="form-section">
              <Field component={Input} type="radio" name="property-type" value="0" id="property-type" />
              <label htmlFor="property-type">
                <span>House</span>
              </label>
            </div>

            <div className="form-section">
              <Field component={Input} type="radio" name="property-type" value="1" id="property-type" />
              <label htmlFor="property-type">
                <span>Condo</span>
              </label>
            </div>

            <div className="form-section">
              <Field component={Input} type="radio" name="property-type" value="2" id="property-type" />
              <label htmlFor="property-type">
                <span>Apartment</span>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Property Address</legend>
            <div className="form-section">
              <label htmlFor="street" className="address-label">Street</label>
              <Field component={Input} type="text" name="street" id="street" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
            <label htmlFor="city" className="address-label">City</label>
              <Field component={Input} type="text" name="city" id="city" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
            <label htmlFor="state" className="address-label">State</label>
              <Field component={Input} type="text" name="state" id="state" validate={[required, nonEmpty]} />
            </div>

            <div className="form-section">
            <label htmlFor="zipcode" className="address-label">Zip Code</label>
              <Field component={Input} type="text" name="zipcode" id="zipcode" validate={[required, nonEmpty]} />
            </div>
          </fieldset>

          <button className="submit-property-button" disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'add-property',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-property', Object.keys(errors)[0]))
})(AddProperty);
