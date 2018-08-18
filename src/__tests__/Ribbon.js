import React from "react";
import { shallow } from "enzyme";
import Ribbon from "../components/Ribbon";

describe("<Ribbon />", () => {
  it("Renders without crashing", () => {
    shallow(<Ribbon />);
  });
});
