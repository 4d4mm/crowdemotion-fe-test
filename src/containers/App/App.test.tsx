import React from "react";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import App from "./App";

const ConfiguredMenoryRouter = ({ children }) =>(<MemoryRouter keyLength={0} initialEntries={[{pathname: '/'}]}>{children}</MemoryRouter>)

describe("App", () => {
  it("renders with default ui", () => {
    act(()=>{
        const renderedApp = mount(<App router={ConfiguredMenoryRouter}/>);
        expect(renderedApp).toMatchSnapshot();
    })
  });
});
