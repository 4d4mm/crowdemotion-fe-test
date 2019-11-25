import * as React from "react";
import { Link } from "react-router-dom";
import Layout from "../../templates/Layout/Layout";
import Button from "../../components/Button/Button";
import CustomForm from "../../components/CustomFrom/CustomForm";
import * as project from "../../schemas/project.json";

const NewSurveyForm = () => (
  <Layout>
    <CustomForm schema={project}>
      <Link to="/">
        <Button variant="secondary">Cancel</Button>
      </Link>
      <Button variant="primary">Create</Button>
    </CustomForm>
  </Layout>
);

export default NewSurveyForm;
