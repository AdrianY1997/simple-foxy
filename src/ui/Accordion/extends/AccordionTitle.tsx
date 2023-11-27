"use client";

import React from "react";
import classNames from "classnames";
import { useAccordionContext } from "../_hook";
import { FoxyComponentAccordionTitle } from "../../../types/accordion";

import lStyle from "../accordion.module.css";

export default function AccordionTitle({
  startIcon,
  endIcon,
  children,
  ...args
}: FoxyComponentAccordionTitle) {
  const { isShow, setIsShow } = useAccordionContext();

  args.className = classNames(lStyle.element, args.className);

  const handleOpen = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <p onClick={handleOpen} {...args}>
        {startIcon && (
          <span className={classNames(isShow && lStyle.show)}>{startIcon}</span>
        )}
        {children}
        {endIcon && (
          <span className={classNames(isShow && lStyle.show)}>{endIcon}</span>
        )}
      </p>
    </>
  );
}
