import React from 'react';
import { shallow } from 'enzyme';
import Properties from '../components/Properties';


describe("<Properties />", () => {
  it("Renders without crashing", () => {
    shallow(<Properties />);
  });
});