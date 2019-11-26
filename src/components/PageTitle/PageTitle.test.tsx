import React from "react";
import { mount } from "enzyme";
import PageTitle from "./PageTitle";

describe("PageTitle", () => {
  it("renders button with default ui", () => {
    const renderedPageTitle = mount(<PageTitle title="test title"/>);
    expect(renderedPageTitle).toMatchSnapshot();
  });
});
