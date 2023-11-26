import classNames from "classnames";
import React from "react";
import { FoxyComponentTypography } from "../../../types/typography";

import gStyle from "../../global.module.css";

export const Caption = ({ children, ...args }: FoxyComponentTypography) => {
  args.className = classNames(
    gStyle[`${args.color ? args.color : "disabled"}`],
    args.className
  );

  return (
    <>
      <span {...args}>{children}</span>
    </>
  );
};
