"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAccordionContext } from "../_hook";
import { FoxyComponentAccordionContent } from "../../../types/accordion";

import lStyle from "../accordion.module.css";
import classNames from "classnames";

export default function AccordionContent({
  children,
}: FoxyComponentAccordionContent) {
  const { isShow } = useAccordionContext();
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current?.scrollHeight as number);
      ref.current?.style.setProperty("height", "0");
      ref.current?.style.removeProperty("visibility");
      ref.current?.style.removeProperty("overflow");
      ref.current?.style.removeProperty("position");
    }, 100);
  }, []);

  useEffect(() => {
    if (isShow) {
      ref.current?.style.setProperty("height", height + "px");
      setTimeout(() => {
        ref.current?.style.setProperty("height", "auto");
      }, 200);
    } else {
      setHeight(ref.current?.clientHeight as number);
      ref.current?.style.setProperty(
        "height",
        (ref.current?.clientHeight as number) + "px"
      );
      setTimeout(() => {
        ref.current?.style.setProperty("height", "0");
      }, 1);
    }
  }, [isShow]);

  return (
    <>
      <div
        className={classNames(lStyle.content)}
        style={{
          visibility: "hidden",
          height: "auto",
          overflow: "visible",
          position: "absolute",
        }}
        ref={ref}
      >
        {children}
      </div>
    </>
  );
}
