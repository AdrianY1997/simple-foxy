import React, { Dispatch, SetStateAction } from "react";

export type StepperContext = {
  actStep: number;
  stepCounter: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  setStepCounter: Dispatch<SetStateAction<number>>;
};

export type OverridableStep = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  args?: any;
};

export type OverridableStepper = React.ComponentPropsWithoutRef<"div"> & {
  activeStep: number;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  args?: any;
};
