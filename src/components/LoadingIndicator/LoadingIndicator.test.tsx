import React from "react";
import { mount } from "enzyme";
import LoadingIndicator from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  it("renders loading indicator with default ui", () => {
    const renderedLoadingIndicator = mount(<LoadingIndicator />);
    expect(renderedLoadingIndicator).toMatchSnapshot();
  });
});
