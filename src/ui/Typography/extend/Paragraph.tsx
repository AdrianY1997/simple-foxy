import classNames from "classnames";
import React from "react";
import { FoxyComponentTypography } from "../../../types/typography";

export const Paragraph = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <p {...args}>{children}</p>
    </>
  );
};
