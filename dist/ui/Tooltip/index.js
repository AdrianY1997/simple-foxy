"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const tooltip_module_css_1 = __importDefault(require("./tooltip.module.css"));
const Tooltip = ({ title, placement, children, ...args }) => {
    const containerClass = (0, classnames_1.default)(tooltip_module_css_1.default.container);
    args.className = (0, classnames_1.default)(tooltip_module_css_1.default.element, tooltip_module_css_1.default[placement], args.className);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: containerClass },
            react_1.default.createElement("div", { ...args }, title),
            react_1.default.createElement("div", null, children))));
};
exports.default = Tooltip;
