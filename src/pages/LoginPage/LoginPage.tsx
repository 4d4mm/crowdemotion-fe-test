import * as React from "react";
import { JSONSchema6 } from 'json-schema';
import { RouteProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../templates/Layout/Layout";
import CustomForm from "../../components/CustomFrom/CustomForm";
import login from "../../schemas/login.json";
import loginUI from "../../schemas/login-ui.json";

const LoginPage: React.SFC<RouteProps> = () => (
  <Layout>
    <CustomForm idPrefix="loginform" schema={login as JSONSchema6} uiSchema={loginUI}>
      <Button variant="primary">Login</Button>
    </CustomForm>
  </Layout>
);

export default LoginPage;
