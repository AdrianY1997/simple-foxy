import classNames from "classnames";
import React from "react";
import { FoxyComponentTypography } from "../../../types/typography";

export const Heading2 = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <h2 {...args}>{children}</h2>
    </>
  );
};
