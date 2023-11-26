import React from "react";
import { FoxyComponentTypography } from "../../../types/typography";

export const Heading1 = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <h1 {...args}>{children}</h1>
    </>
  );
};
