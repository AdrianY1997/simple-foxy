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
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const button_module_css_1 = __importDefault(require("./button.module.css"));
const Button = ({ elevation, border = 1, size, weight, rounded, transform, decoration, variant, color, children, ...args }) => {
    args.className = (0, classnames_1.default)(button_module_css_1.default.c0, button_module_css_1.default[`elevation-${elevation}`], button_module_css_1.default[`border-${border}`], button_module_css_1.default[`size-${size}`], button_module_css_1.default[`weight-${weight}`], button_module_css_1.default[`rounded-${rounded}`], button_module_css_1.default[`transform-${transform}`], button_module_css_1.default[`decoration-${decoration}`], button_module_css_1.default[`variant-${variant}`], button_module_css_1.default[`color-${color}`], button_module_css_1.default.element, args.className);
    args.type = args.type || "button";
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("button", { ...args }, children)));
};
exports.default = Button;
