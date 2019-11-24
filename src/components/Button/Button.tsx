import React, { SFC, ReactNode } from "react";
import clsx from "clsx";
import "./Button.scss";

type Variant = "primary" | "secondary";

type BottonProps = {
  variant: Variant;
  children: ReactNode;
};

const Button: SFC<BottonProps> = ({ variant = "primary", children }) => (
  <button
    className={clsx("btn", {
      [`btn__${variant}`]: true
    })}
  >
    {children}
  </button>
);

export default Button;
