import React from "react";
import { shallow } from "enzyme";
import EditProperty from "../components/Edit-property";

describe("<EditProperty />", () => {
  it("Renders without crashing", () => {
    shallow(<EditProperty />);
  });
});
