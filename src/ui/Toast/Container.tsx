"use client";

import React, { Fragment, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Element } from "./";
import Context from "./util/context";
import { useToast } from "./util/useToast";
import EventEmitter from "events";
import { v4 } from "uuid";
import { ToastContainerProps } from "../../types/toast";

import lStyle from "./toast.module.css";

export const toastEmitter = new EventEmitter();

function Container({ ...args }: ToastContainerProps) {
  const [toasts, setToasts] = useState<{}[]>([]);

  args.className = classNames(lStyle.container);

  const hideToast = useCallback(() => {
    setToasts([]);
  }, []); // Dependencias vacías ya que la función no utiliza variables externas.

  useEffect(() => {
    let interval: any = null;

    const appendListener = (toast: any) => {
      clearTimeout(interval);

      setToasts((prev) => [...prev, { ...toast, ["id"]: v4() }]);
      interval = setTimeout(() => hideToast(), 15000);
    };

    toastEmitter.on("append", appendListener);

    return () => {
      toastEmitter.off("append", appendListener);
    };
  }, [hideToast]);

  return (
    <Context.Provider value={{ toasts, setToasts }}>
      {toasts.length !== 0 && (
        <div {...args}>
          {toasts.map((e, i) => (
            <Fragment key={i}>
              <Element data={e} />
            </Fragment>
          ))}
        </div>
      )}
    </Context.Provider>
  );
}

Container.useToast = useToast;

export default Container;
