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
  const ref = useRef<HTMLButtonElement | null>(null);

  const containerClass = classNames(
    gStyle[`${color}`],
    lStyle[`${color}`],
    lStyle.container,
    lStyle[`rounded-${rounded}`],
    lStyle[rounded ? "rounded" : ""],
    lStyle[`${variant}`]
  );

  const buttonClass = classNames(
    lStyle.element,
    lStyle[`rounded-${rounded}`],
    lStyle[rounded ? "rounded" : ""],
    lStyle[
      variant === "outlined" ? `border-${border || 1}` : `border-${border}`
    ],
    lStyle[`${size}`],
    transform,
    args.className
  );

  delete args.className;
  return (
    <>
      <div className={containerClass}>
        <button
          ref={ref}
          className={buttonClass}
          type={args.type || "button"}
          {...args}
        >
          <p className="space-x-2">
            {startIcon && <span>{startIcon}</span>}
            {children && <span>{children}</span>}
            {endIcon && <span>{endIcon}</span>}
          </p>
        </button>
      </div>
    </>
  );
};

export default Button;
