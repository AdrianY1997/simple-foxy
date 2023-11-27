import React from "react";
export type FoxyComponentTypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
export type FoxyComponentTypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph" | "caption";
export type FoxyComponentTypography = React.ComponentPropsWithoutRef<FoxyComponentTypographyElement> & {
    args?: any;
};
export type FoxyComponentTypographyVariants = {
    [variant in FoxyComponentTypographyVariant]: string;
};
export type FoxyComponentTypographyVariantClases = {
    [variant in FoxyComponentTypographyVariant]: React.ReactNode;
};
export type FoxyComponentTypographyVariantGetter = React.ComponentPropsWithoutRef<FoxyComponentTypographyElement> & {
    variant: FoxyComponentTypographyVariant;
    children: React.ReactNode;
    args?: any;
};
export type OverridableTypography = React.ComponentPropsWithoutRef<FoxyComponentTypographyElement> & {
    variant?: FoxyComponentTypographyVariant;
    children: React.ReactNode;
    args?: any;
};
