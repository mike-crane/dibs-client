import React from 'react';
import { shallow } from 'enzyme';
import PropertyDetails from '../components/Property-details';


describe("<PropertyDetails />", () => {
  it("Renders without crashing", () => {
    shallow(<PropertyDetails />);
  });
});