import * as React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import NewSurveyForm from "./NewSurveyForm";

describe("NewSurveyForm", () => {
  it("renders NewSurveyForm", () => {
    const newSurveyForm = renderer.create(
      <MemoryRouter initialEntries={[{pathname:'/', key:'test'}]}>
        <NewSurveyForm />
      </MemoryRouter>
    ).toJSON();
    expect(newSurveyForm).toMatchSnapshot();
  });
});
