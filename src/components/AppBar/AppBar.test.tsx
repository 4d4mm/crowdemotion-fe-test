import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import AppBar from "./AppBar";

const MockLogo: React.SFC = () => <div>logo</div>;

describe("AppBar", () => {
  it("renders button with default ui", () => {
    const renderedAppBar = mount(<MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}><AppBar logo={MockLogo} /></MemoryRouter>);
    expect(renderedAppBar).toMatchSnapshot();
  });
});
