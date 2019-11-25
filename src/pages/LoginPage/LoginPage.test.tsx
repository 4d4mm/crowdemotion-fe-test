import React from "react";
import { mount } from "enzyme";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders LoginPage", () => {
    const loginPage = mount(<LoginPage />);
    //expect(loginPage).toMatchSnapshot();
  });
});
