import React from "react";
import classNames from "classnames";
import { FoxyComponentTypography } from "../../../types/typography";

import styles from "../typography.module.css";

export const Heading6 = ({ children, ...args }: FoxyComponentTypography) => {
  return (
    <>
      <h6 {...args}>{children}</h6>
    </>
  );
};
