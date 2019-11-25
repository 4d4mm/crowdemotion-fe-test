import React from "react";
import { mount } from "enzyme";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders layout", () => {
    const renderedButton = mount(<Layout>Test</Layout>);
    //expect(renderedButton).toMatchSnapshot();
  });
});
