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
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const global_module_css_1 = __importDefault(require("../global.module.css"));
const button_module_css_1 = __importDefault(require("./button.module.css"));
const Button = ({ size, variant = "text", color = "default", startIcon, endIcon, children, transform, rounded = "mn", border, ...args }) => {
    const ref = (0, react_1.useRef)(null);
    args.className = (0, classnames_1.default)(global_module_css_1.default[`${color}`], button_module_css_1.default.element, button_module_css_1.default[`${color}`], button_module_css_1.default.container, button_module_css_1.default[`rounded-${rounded}`], button_module_css_1.default[rounded ? "rounded" : ""], button_module_css_1.default[variant === "outlined" ? `border-${border || 1}` : `border-${border}`], button_module_css_1.default[`${variant}`], args.className);
    const contentClass = (0, classnames_1.default)(button_module_css_1.default.content, button_module_css_1.default[`rounded-${rounded}`], button_module_css_1.default[rounded ? "rounded" : ""], button_module_css_1.default[`${size}`], transform);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { ...args, type: args.type || "button" },
            react_1.default.createElement("p", { ref: ref, className: contentClass },
                startIcon && react_1.default.createElement("span", null, startIcon),
                children && react_1.default.createElement(react_1.default.Fragment, null, children),
                endIcon && react_1.default.createElement("span", null, endIcon)))));
};
exports.default = Button;
