"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperContext = void 0;
const react_1 = __importStar(require("react"));
const Step_1 = require("../extends/Step");
const Label_1 = require("../extends/Label");
const Content_1 = require("../extends/Content");
const classnames_1 = __importDefault(require("classnames"));
exports.StepperContext = (0, react_1.createContext)(undefined);
const Stepper = ({ activeStep, orientation, children, ...args }) => {
    const [actStep, setActiveStep] = (0, react_1.useState)(activeStep);
    const [stepCounter, setStepCounter] = (0, react_1.useState)(0);
    args.className = (0, classnames_1.default)(args.className, "flex", {
        "flex-col": orientation === "vertical",
    });
    return (react_1.default.createElement(exports.StepperContext.Provider, { value: { actStep, stepCounter, setActiveStep, setStepCounter } },
        react_1.default.createElement("div", { ...args }, children)));
};
Stepper.Step = Step_1.Step;
Stepper.StepLabel = Label_1.Label;
Stepper.StepContent = Content_1.Content;
exports.default = Stepper;
