import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import MainContent from "./MainContent";

describe("MainContent", () => {
  it("renders main with default ui", () => {
    const renderedMainContent = mount(<MainContent>Test</MainContent>);
    expect(renderedMainContent).toMatchSnapshot();
  });
});
