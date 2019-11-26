import * as React from "react";
import renderer from 'react-test-renderer'
import { MemoryRouter, Route } from "react-router-dom";
import SurveyDetails from "./SurveyDetails";

describe("SurveyDetails", () => {
  it("renders SurveyDetails", () => {
    const surveyDetails = renderer.create(
      <MemoryRouter initialEntries={[{pathname:'/'}]} keyLength={0}>
        <Route path='/survey' component={SurveyDetails} />
      </MemoryRouter>
    ).toJSON();
    expect(surveyDetails).toMatchSnapshot();
  });
});
