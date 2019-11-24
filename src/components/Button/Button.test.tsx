import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  it("renders button with default ui", () => {
    const renderedButton = mount(<Button variant="primary">Test</Button>);
    expect(renderedButton).not.toBeNull();
  });
});
