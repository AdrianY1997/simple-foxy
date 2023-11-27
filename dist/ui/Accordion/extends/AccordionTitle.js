"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const _hook_1 = require("../_hook");
const accordion_module_css_1 = __importDefault(require("../accordion.module.css"));
function AccordionTitle({ startIcon, endIcon, children, ...args }) {
    const { isShow, setIsShow } = (0, _hook_1.useAccordionContext)();
    args.className = (0, classnames_1.default)(accordion_module_css_1.default.element, args.className);
    const handleOpen = () => {
        setIsShow(!isShow);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { onClick: handleOpen, ...args },
            startIcon && (react_1.default.createElement("span", { className: (0, classnames_1.default)(isShow && accordion_module_css_1.default.show) }, startIcon)),
            children,
            endIcon && (react_1.default.createElement("span", { className: (0, classnames_1.default)(isShow && accordion_module_css_1.default.show) }, endIcon)))));
}
exports.default = AccordionTitle;
