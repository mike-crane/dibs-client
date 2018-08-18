import React from "react";
import { shallow } from "enzyme";
import AddProperty from "../components/Add-property";

describe("<AddProperty />", () => {
  it("Renders without crashing", () => {
    shallow(<AddProperty />);
  });
});
