import React from "react";
import { mount } from "enzyme";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders Logo", () => {
    const Logo = mount(<Logo />);
    //expect(logo).toMatchSnapshot();
  });
});
