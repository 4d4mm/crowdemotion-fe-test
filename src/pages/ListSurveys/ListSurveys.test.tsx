import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter, Route } from "react-router-dom";
import ListSurveys from "./ListSurveys";


describe("ListSurveys", () => {
  it("renders ListSurveys", () => {
    const listSurveysRender = renderer.create(
        <MemoryRouter keyLength={0} initialEntries={[{pathname:'/surveys'}]}>
            <Route path="/surveys" component={ListSurveys} />
        </MemoryRouter>
    ).toJSON();
    expect(listSurveysRender).toMatchSnapshot();
  });
});
