import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import PrivateRoute from "./PrivateRoute";
import { login } from '../../auth';

const DummyComponent = () => (<div>DummyComponent</div>)
describe("PrivateRoute", () => {
  it("renders with default ui", () => {
    const renderedProvateRouteNoComponent = mount(
        <MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}>
            <PrivateRoute path="/" key="test" component={DummyComponent} unauthenticated={DummyComponent}/>
        </MemoryRouter>
    );
    expect(renderedProvateRouteNoComponent).toMatchSnapshot();
  });
  it("renders null if the component is not defined", () => {
    login('testtoken')
    const renderedProvateRouteNoComponent = mount(
        <MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}>
            <PrivateRoute path="/" key="test" unauthenticated={DummyComponent}/>
        </MemoryRouter>
    );
    expect(renderedProvateRouteNoComponent.find('PrivateRoute').children().length).toBe(0);
  });
});
