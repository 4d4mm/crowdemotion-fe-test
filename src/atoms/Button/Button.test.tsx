import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  it("renders button with default ui", () => {
    const renderedButton = mount(<Button>Test</Button>);
  });
});
