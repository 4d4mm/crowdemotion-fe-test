import React from "react";
import { mount } from "enzyme";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders Logo", () => {
    const logo = mount(<Logo />);
    expect(logo).toMatchSnapshot();
  });
});
