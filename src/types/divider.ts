import React from "react";
import { FoxyComponentColor } from "./simple-foxy";

export type FoxyComponentDividerOrientationClass = {
  full: string;
  size: {
    height?: string;
    width?: string;
  };
};
export type FoxyComponentDividerOrientation = "vertical" | "horizontal";
export type FoxyComponentDividerOrientations = {
  [key: string]: (size: number) => {
    full: string;
    size: { height?: string; width?: string };
  };
};

export type OverridableDividerType = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
  size?: number;
  color?: FoxyComponentColor;
  args?: any;
};
