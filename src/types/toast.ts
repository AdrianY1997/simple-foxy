import React, { Dispatch, SetStateAction } from "react";

export type FoxyComponentToastButton =
  React.ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    args?: any;
  };

export type IconTimesProps = React.ComponentPropsWithoutRef<"svg"> & {
  args?: any;
};

export type IconArchiveProps = React.ComponentPropsWithoutRef<"svg"> & {
  args?: any;
};

export type ToastContext = {
  toasts: {}[];
  setToasts: Dispatch<SetStateAction<{}[]>>;
};

export type ToastContainerProps = React.ComponentPropsWithoutRef<"div"> & {
  args?: any;
};

export type ToastElementProps = React.ComponentPropsWithoutRef<"div"> & {
  data: any;
  args?: any;
};

export type FoxyComponentToastEmitterParams = {
  type: "success" | "error" | "warning" | "information";
  title?: string;
  message: string;
};
