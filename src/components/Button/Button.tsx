import * as React from "react";
import clsx from "clsx";
import "./Button.scss";

type Variant = "primary" | "secondary";

type BottonProps = {
  variant: Variant;
  children: React.ReactNode;
};

const Button: React.SFC<BottonProps> = ({ variant = "primary", children }) => (
  <button
    className={clsx("btn", {
      [`btn__${variant}`]: true
    })}
  >
    {children}
  </button>
);

export default Button;
