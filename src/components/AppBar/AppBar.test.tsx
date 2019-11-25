import React from "react";
import { mount } from "enzyme";
import AppBar from "./AppBar";

const MockLogo: React.SFC = () => <div>logo</div>;

describe("AppBar", () => {
  it("renders button with default ui", () => {
    const renderedAppBar = mount(<AppBar logo={MockLogo} title="Test title" />);
    expect(renderedAppBar).not.toBeNull();
  });
});
