import * as React from "react";
import { Link } from "react-router-dom";
import { JSONSchema6 } from 'json-schema';
import Layout from "../../templates/Layout/Layout";
import Button from "../../components/Button/Button";
import CustomForm from "../../components/CustomFrom/CustomForm";
import project from "../../schemas/project.json";

const NewSurveyForm = () => (
  <Layout>
    <CustomForm name="newsurveyfrom"  idPrefix="newsurveyfrom" schema={project as JSONSchema6}>
      <Link to="/">
        <Button variant="secondary">Cancel</Button>
      </Link>
      <Button variant="primary">Create</Button>
    </CustomForm>
  </Layout>
);

export default NewSurveyForm;
