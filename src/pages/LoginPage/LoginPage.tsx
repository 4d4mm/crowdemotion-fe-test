import * as React from "react";
import { JSONSchema6 } from 'json-schema';
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import Layout from "../../templates/Layout/Layout";
import CustomForm from "../../components/CustomFrom/CustomForm";
import loginSchema from "../../schemas/login.json";
import loginUI from "../../schemas/login-ui.json";
import useJSONRequest from '../../hooks/useJSONRequest'
import { login } from '../../auth'

const LoginPage: React.SFC<RouteComponentProps> = ({ history }) => {
  const [{ data, isLoading, error }, loginApi] = useJSONRequest('/auth', {method: "POST"})
  if (data && data.access_token) {
    login(data.access_token)
    history.push('/')
  }
  return (
    <Layout>
      {isLoading && <LoadingIndicator />}
      <CustomForm idPrefix="loginform" schema={loginSchema as JSONSchema6}  uiSchema={loginUI} onSubmit={(formState)=> {
        loginApi(formState.formData); 
      }}>
        <Button variant="primary">Login</Button>
      </CustomForm>
    </Layout>
  );
}

export default LoginPage;
