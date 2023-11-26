import React from "react";

export type FoxyComponentBoxType = "div" | "section" | "form";

export type FoxyComponentBoxTypes = {
  [key in FoxyComponentBoxType]: React.ReactNode;
};

export type FoxyComponentBoxTypeGetter = {
  type: FoxyComponentBoxType;
  children: React.ReactNode;
  args?: any;
};

export type FoxyComponentBoxDiv = React.ComponentPropsWithoutRef<"div"> & {
  children?: React.ReactNode;
  args?: any;
};

export type FoxyComponentBoxSection =
  React.ComponentPropsWithoutRef<"section"> & {
    children?: React.ReactNode;
    args?: any;
  };

export type FoxyComponentBoxForm = React.ComponentPropsWithoutRef<"form"> & {
  children?: React.ReactNode;
  args?: any;
};

export type OverridableBox =
  React.ComponentPropsWithoutRef<FoxyComponentBoxType> & {
    component?: FoxyComponentBoxType;
    args?: any;
  };
