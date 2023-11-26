import React, { Dispatch, SetStateAction } from "react";

export type AccordionContextType = {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export type FoxyComponentAccordion = React.ComponentPropsWithoutRef<"div"> & {
  active?: boolean;
  children: React.ReactNode;
  args?: any;
};

export type FoxyComponentAccordionTitle =
  React.ComponentPropsWithoutRef<"div"> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children: React.ReactNode;
    args?: any;
  };

export type FoxyComponentAccordionContent = {
  children: React.ReactNode;
};
