import React from "react";
import classNames from "classnames";
import { OverridableDividerType } from "../../types/divider";

import gStyle from "../global.module.css";
import lStyle from "./orientation.module.css";

const Divider = ({
  orientation = "horizontal",
  size,
  ...args
}: OverridableDividerType) => {
  args.className = classNames(
    gStyle[`${args.color}`],
    lStyle.element,
    lStyle[orientation],
    args.className
  );

  return (
    <>
      <div {...args} style={{ ["--divider-size" as any]: `${size || 1}px` }} />
    </>
  );
};

export default Divider;
