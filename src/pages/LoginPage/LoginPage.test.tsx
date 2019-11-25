import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("renders LoginPage", () => {
    const loginPage = mount(<MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}><LoginPage /></MemoryRouter>);
    expect(loginPage).toMatchSnapshot();
  });
});
