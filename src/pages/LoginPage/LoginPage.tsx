import * as React from "react";
import { RouteProps } from "react-router-dom";
import Layout from "../../templates/Layout/Layout";
import CustomForm from "../../components/CustomFrom/CustomForm";
import * as login from "../../schemas/login.json";
import * as loginUI from "../../schemas/login-ui.json";

const LoginPage: React.SFC<RouteProps> = () => (
  <Layout>
    <CustomForm schema={login} uiSchema={loginUI} />
  </Layout>
);

export default LoginPage;
