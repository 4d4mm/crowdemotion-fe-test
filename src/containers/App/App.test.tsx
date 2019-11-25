import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "./App";

const ConfiguredMenoryRouter = ({ children }) =>(<MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}>{children}</MemoryRouter>)

describe("App", () => {
  it("renders with default ui", () => {
    const renderedApp = mount(<App router={ConfiguredMenoryRouter}/>);
    //expect(renderedApp).toMatchSnapshot();
  });
});
