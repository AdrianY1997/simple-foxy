"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStepperContext = void 0;
const react_1 = require("react");
const _context_1 = require("../context/_context");
const useStepperContext = () => {
    const context = (0, react_1.useContext)(_context_1.StepperContext);
    if (!context) {
        throw new Error("useStepperContext should be used within the scope of a Stepper context");
    }
    return context;
};
exports.useStepperContext = useStepperContext;
