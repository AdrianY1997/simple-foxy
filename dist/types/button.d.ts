/// <reference types="react" />
export type FoxyComponentButtonElevation = "none" | "near" | "normal" | "far";
export type FoxyComponentButtonBorder = 1 | 2 | 3 | 4 | 5;
export type FoxyComponentButtonWeight = "lighter" | "bolder" | "bold";
export type FoxyComponentButtonSize = "small" | "normal" | "large";
export type FoxyComponentButtonRounded = "small" | "normal" | "large" | "full";
export type FoxyComponentButtonTransform = "cap" | "lower" | "upper";
export type FoxyComponentButtonDecoration = "overline" | "underline" | "line-through";
export type FoxyComponentButtonVariant = "contained" | "outlined" | "text";
export type FoxyComponentButtonColor = "default" | "primary" | "secondary" | "information" | "disabled" | "success" | "warning" | "error";
export type FoxyComponentOverridableButton = React.ComponentPropsWithoutRef<"button"> & {
    elevation?: FoxyComponentButtonElevation;
    border?: FoxyComponentButtonBorder;
    size?: FoxyComponentButtonSize;
    weight?: FoxyComponentButtonWeight;
    rounded?: FoxyComponentButtonRounded;
    transform?: FoxyComponentButtonTransform;
    decoration?: FoxyComponentButtonDecoration;
    variant?: FoxyComponentButtonVariant;
    color?: FoxyComponentButtonColor;
    children: React.ReactNode;
    args?: any;
};
