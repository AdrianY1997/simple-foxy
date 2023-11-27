"use client";

import React, { Fragment, useEffect, useRef } from "react";
import classNames from "classnames";
import { IconTimes } from "./Icon";
import Button from "../Button";
import Tooltip from "../Tooltip";
import { ToastElementProps } from "../../types/toast";

import gStyle from "../global.module.css";
import lStyle from "./toast.module.css";

export default function Element({ data, ...args }: ToastElementProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  args.className = classNames(lStyle.element);

  const contentClass = classNames(
    lStyle.content,
    lStyle[data.title ? "title" : "no-title"]
  );

  const barClass = classNames(
    gStyle[data.type],
    lStyle.bar,
    lStyle["loader-0"]
  );

  function hideToast() {
    elementRef.current?.classList.add(classNames(lStyle.hide));
    elementRef.current?.style.setProperty(
      "height",
      `${elementRef.current?.offsetHeight}px`
    );

    setTimeout(() => {
      elementRef.current?.classList.add(classNames(lStyle.shrink));
      setTimeout(() => elementRef.current?.classList.add(lStyle.remove), 200);
    }, 200);
  }

  function handleRemoveToast() {
    hideToast();
  }

  useEffect(() => {
    setTimeout(() => {
      barRef.current?.classList.remove(classNames(lStyle["loader-0"]));
      barRef.current?.classList.add(classNames(lStyle["loader-full"]));
    }, 1);

    setTimeout(() => hideToast(), 15000);
  }, [hideToast]);

  return (
    <Fragment>
      <div ref={elementRef} {...args}>
        <div className={contentClass}>
          <div className={classNames(lStyle["title-container"])}>
            {data.title && (
              <div>
                <h3>{data.title}</h3>
              </div>
            )}
            <div className={classNames(lStyle["close-container"])}>
              <Tooltip title="delete" placement="top">
                <Button
                  rounded="full"
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={handleRemoveToast}
                >
                  <IconTimes height="1rem" />
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className={classNames(lStyle["bar-container"])}>
            <div ref={barRef} className={barClass} />
          </div>
        </div>
        <div>
          <p className={classNames(lStyle.message)}>{data.message}</p>
        </div>
      </div>
    </Fragment>
  );
}
