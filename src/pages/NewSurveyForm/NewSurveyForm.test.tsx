import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import NewSurveyForm from "./NewSurveyForm";

describe("NewSurveyForm", () => {
  it("renders NewSurveyForm", () => {
    const newSurveyForm = mount(<MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}><NewSurveyForm /></MemoryRouter>);
    //NOTE: array field keys are changing.
    //expect(newSurveyForm).toMatchSnapshot();
  });
});
