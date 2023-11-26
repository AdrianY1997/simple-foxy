import classNames from "classnames";
import React from "react";
import { FoxyComponentTypography } from "../../../types/typography";

export const Heading4 = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <h4 {...args}>{children}</h4>
    </>
  );
};
