import * as React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SurveyDetails from "./SurveyDetails";

describe("SurveyDetails", () => {
  it("renders SurveyDetails", () => {
    const surveyDetails = mount(<MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}><SurveyDetails /></MemoryRouter>);
    expect(surveyDetails).toMatchSnapshot();
  });
});
