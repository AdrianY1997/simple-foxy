import React, { Fragment } from "react";
import classNames from "classnames";

import { FoxyComponentOverridableButton } from "../../types/button";

import globl from "../global.module.css";
import style from "./button.module.css";

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
    globl[`color-${color}`],
    style[`elevation-${elevation}`],
    style[`border-${border}`],
    style[`size-${size}`],
    style[`weight-${weight}`],
    style[`rounded-${rounded}`],
    style[`transform-${transform}`],
    style[`decoration-${decoration}`],
    style[`variant-${variant}`],
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
