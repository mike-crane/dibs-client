import React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from '../components/Registration-form';


describe("<RegistrationForm />", () => {
  it("Renders without crashing", () => {
    shallow(<RegistrationForm />);
  });
});