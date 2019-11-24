import * as React from "react";
import Layout from "../../templates/Layout/Layout";
import CustomForm from "../../components/CustomFrom/CustomForm";
import * as project from "../../schemas/project.json";

const SurveyForm = ({}) => (
  <Layout>
    <CustomForm schema={project} />
  </Layout>
);
export default SurveyForm;
