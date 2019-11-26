import * as React from "react";
import { Link } from "react-router-dom";
import { JSONSchema6 } from 'json-schema';
import Layout from "../../templates/Layout/Layout";
import Button from "../../components/Button/Button";
import CustomForm from "../../components/CustomFrom/CustomForm";
import project from "../../schemas/project.json";
import projectUI from "../../schemas/project-ui.json";
import useJSONRequest from '../../hooks/useJSONRequest';
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

const NewSurveyForm: React.FC = () => {
  const [{ isLoading, data, error}, createSurveyProject] = useJSONRequest('/new-surveys', { method: 'PUT' })
  const submitForm = (formState:any) => {
    //console.log(formState);
    const postData = {
      "notificationEmails": [],
      ...formState.formData

    };
    if (!postData.exclusions.type) {
      postData.exclusions.type = "PROJECT",
      postData.exclusions.list = [];
    }
    createSurveyProject(postData)
  }
  return (
    <Layout>
      
      <CustomForm name="newsurveyfrom"  idPrefix="newsurveyfrom" schema={project as JSONSchema6} uiSchema={projectUI} onSubmit={submitForm}>
        {isLoading ? <LoadingIndicator /> : (
          <>
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            <Button variant="primary">Create</Button>
          </>
        )}
      </CustomForm>
    </Layout>
  );
}

export default NewSurveyForm;
