"use client";

import React, { useRef } from "react";
import classNames from "classnames";
import { OverridableFoxyButton } from "../../types/button";

import gStyle from "../global.module.css";
import lStyle from "./button.module.css";

const Button = ({
  size,
  variant = "text",
  color = "default",
  startIcon,
  endIcon,
  children,
  transform,
  rounded = "mn",
  border,
  ...args
}: OverridableFoxyButton) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  args.className = classNames(
    gStyle[`${color}`],
    lStyle.element,
    lStyle[`${color}`],
    lStyle.container,
    lStyle[`rounded-${rounded}`],
    lStyle[rounded ? "rounded" : ""],
    lStyle[
      variant === "outlined" ? `border-${border || 1}` : `border-${border}`
    ],
    lStyle[`${variant}`],
    args.className
  );

  const contentClass = classNames(
    lStyle.content,
    lStyle[`rounded-${rounded}`],
    lStyle[rounded ? "rounded" : ""],
    lStyle[`${size}`],
    transform
  );

  return (
    <>
      <button {...args} type={args.type || "button"}>
        <p ref={ref} className={contentClass}>
          {startIcon && <span>{startIcon}</span>}
          {children && <>{children}</>}
          {endIcon && <span>{endIcon}</span>}
        </p>
      </button>
    </>
  );
};

export default Button;
