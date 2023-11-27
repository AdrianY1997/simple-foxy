import React from "react";
import classNames from "classnames";
import { OverridableTooltipType } from "../../types/tooltip";

import lStyle from "./tooltip.module.css";

const Tooltip = ({
  title,
  placement,
  children,
  ...args
}: OverridableTooltipType) => {
  const containerClass = classNames(lStyle.container);
  args.className = classNames(
    lStyle.element,
    lStyle[placement],
    args.className
  );

  return (
    <>
      <div className={containerClass}>
        <div {...args}>{title}</div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Tooltip;
