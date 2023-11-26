import React from "react";
import { OverridableStepper, StepperContext as TStepperContext } from "../../../types/stepper";
export declare const StepperContext: React.Context<TStepperContext | undefined>;
declare const Stepper: {
    ({ activeStep, orientation, children, ...args }: OverridableStepper): React.JSX.Element;
    Step: ({ children, ...args }: import("../../../types/stepper").OverridableStep) => React.JSX.Element;
    StepLabel: () => React.JSX.Element;
    StepContent: () => React.JSX.Element;
};
export default Stepper;
