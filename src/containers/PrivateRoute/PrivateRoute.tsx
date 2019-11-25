import * as React from "react";
import { Route, RouteComponentProps, RouteProps, Redirect } from "react-router";
import { isLoggedIn } from '../../auth'

const Unauthenticated = () => <Redirect to="/login" />

interface PrivateRouteProps extends RouteProps {
  unauthenticated?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateRoute: React.SFC<PrivateRouteProps> = ({
  component: Component,
  unauthenticated: UnauthenticatedComponent = Unauthenticated,
  ...rest
}) => {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<{}>) =>
        isLoggedIn() ? <Component {...props} /> : <UnauthenticatedComponent  {...props} />
      }
    />
  );
};

export default PrivateRoute;
