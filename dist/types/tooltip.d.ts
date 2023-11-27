import React from "react";
export type FoxyComponentToolipPlacement = "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "right" | "right-top" | "right-bottom" | "left";
export type OverridableTooltipType = React.ComponentPropsWithoutRef<"div"> & {
    title: React.ReactNode | Element;
    placement: FoxyComponentToolipPlacement;
    children: React.ReactNode;
    args?: any;
};
