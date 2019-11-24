import * as React from "react";
import { Route, RouteComponentProps, RouteProps, Redirect } from "react-router";

const PrivateRoute: React.SFC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<{}>) =>
        true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
