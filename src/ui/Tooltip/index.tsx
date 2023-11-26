import React from "react";
import classNames from "classnames";
import { OverridableTooltipType } from "../../types/tooltip";

import lStyle from "./tooltip.module.css";

const Tooltip = ({ title, placement, children }: OverridableTooltipType) => {
  const containerClass = classNames(lStyle.container);
  const tooltipClass = classNames(lStyle.element, lStyle[placement]);

  return (
    <>
      <div className={containerClass}>
        <div className={classNames(tooltipClass)}>{title}</div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Tooltip;
