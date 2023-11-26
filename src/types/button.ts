import { FoxyComponentColor } from "./simple-foxy";
import React from "react";

export type FoxyComponentButtonRounded = "none" | "mn" | "sm" | "lg" | "full";
export type FoxyComponentButtonVariant = "text" | "outlined" | "contained";

export type FoxyComponentVariantButtons = {
  [variants in FoxyComponentButtonVariant]: any;
};

export type FoxyComponentButtonSize = "minimal" | "small" | "normal" | "big";

export type FoxyComponentButtonTransform =
  | "capitalize"
  | "uppercase"
  | "lowecase";

export type OverridableFoxyButtonBase =
  React.ComponentPropsWithoutRef<"button"> & {
    border?: 1 | 2 | 3 | 4 | 5;
    size?: FoxyComponentButtonSize;
    variant?: FoxyComponentButtonVariant;
    children?: React.ReactNode;
    transform?: FoxyComponentButtonTransform;
    rounded?: FoxyComponentButtonRounded;
    args?: any;
  };

export type OverridableFoxyButton = (
  | (OverridableFoxyButtonBase & {
      startIcon?: React.ReactNode;
      endIcon?: never;
    })
  | (OverridableFoxyButtonBase & {
      startIcon?: never;
      endIcon?: React.ReactNode;
    })
) & { color?: FoxyComponentColor };
