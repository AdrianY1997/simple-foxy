import React, { Fragment } from "react";

import style from "./test.module.css";
import classNames from "classnames";
import { FoxyComponentOverridableButton } from "../../types/button";

const Button = ({
  elevation,
  border = 1,
  size,
  weight,
  rounded,
  transform,
  decoration,
  variant,
  color,
  children,
  ...args
}: FoxyComponentOverridableButton) => {
  args.className = classNames(
    style.c0,
    style[`elevation-${elevation}`],
    style[`border-${border}`],
    style[`size-${size}`],
    style[`weight-${weight}`],
    style[`rounded-${rounded}`],
    style[`transform-${transform}`],
    style[`decoration-${decoration}`],
    style[`variant-${variant}`],
    style[`color-${color}`],
    style.element,
    args.className
  );

  args.type = args.type || "button";

  return (
    <Fragment>
      <button {...args}>{children}</button>
    </Fragment>
  );
};

export default Button;
