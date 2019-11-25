import * as React from "react";
import { RouteProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../templates/Layout/Layout";
import CustomForm from "../../components/CustomFrom/CustomForm";
import * as login from "../../schemas/login.json";
import * as loginUI from "../../schemas/login-ui.json";

const LoginPage: React.SFC<RouteProps> = () => (
  <Layout>
    <CustomForm schema={login} uiSchema={loginUI}>
      <Button>Login</Button>
    </CustomForm>
  </Layout>
);

export default LoginPage;
