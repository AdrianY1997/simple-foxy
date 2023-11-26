import React from "react";
import classNames from "classnames";
import { FoxyComponentTypography } from "../../../types/typography";

export const Heading5 = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <h5 {...args}>{children}</h5>
    </>
  );
};
