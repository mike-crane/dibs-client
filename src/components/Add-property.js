import React, { Component } from "react";
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
// import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

class AddProperty extends Component {

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return <form className="list-property" onSubmit={this.props.handleSubmit(
          values => this.onSubmit(values)
        )}>
        {error}
        <h2>New Property</h2>
        <div class="form-section">
          <label htmlFor="property-name">Property name</label>
          <Field component={Input} type="text" name="property-name" id="property-name" validate={[required, nonEmpty]} />
        </div>

        <fieldset>
          <legend>Property Type</legend>
          <Field component={Input} type="radio" name="property-type" value="0" id="property-type" />
          <label htmlFor="property-type">
            <span>House</span>
          </label>

          <Field component={Input} type="radio" name="property-type" value="1" id="property-type" />
          <label htmlFor="property-type">
            <span>Condo</span>
          </label>

          <Field component={Input} type="radio" name="property-type" value="2" id="property-type" />
          <label htmlFor="property-type">
            <span>Apartment</span>
          </label>
        </fieldset>
        
        <fieldset>
          <legend>Property Address</legend>
          <label htmlFor="street">Street</label>
          <Field component={Input} type="text" name="street" id="street" validate={[required, nonEmpty]} />

          <label htmlFor="state">State</label>
          <Field component={Input} type="text" name="state" id="state" validate={[required, nonEmpty]} />

          <label htmlFor="city">City</label>
          <Field component={Input} type="text" name="city" id="city" validate={[required, nonEmpty]} />

          <label htmlFor="zipcode">Zip Code</label>
          <Field component={Input} type="text" name="zipcode" id="zipcode" validate={[required, nonEmpty]} />
        </fieldset>

        <button disabled={this.props.pristine || this.props.submitting}>
            Submit
        </button>
      </form>;
  }
}

export default reduxForm({
  form: 'add-property',
  onSubmitFail: (errors, dispatch) => dispatch(focus('add-property', Object.keys(errors)[0]))
})(AddProperty);
