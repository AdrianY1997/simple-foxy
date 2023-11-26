import classNames from "classnames";
import React from "react";
import { FoxyComponentTypography } from "../../../types/typography";
export const Heading3 = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <h3 {...args}>{children}</h3>
    </>
  );
};
