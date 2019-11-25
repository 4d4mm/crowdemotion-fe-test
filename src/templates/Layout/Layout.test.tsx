import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import Layout from "./Layout";

describe("Layout", () => {
  it("renders layout", () => {
    const renderedButton = mount(<MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}><Layout>Test</Layout></MemoryRouter>);
    expect(renderedButton).toMatchSnapshot();
  });
});
