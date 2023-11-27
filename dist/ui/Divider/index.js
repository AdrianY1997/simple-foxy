"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const global_module_css_1 = __importDefault(require("../global.module.css"));
const orientation_module_css_1 = __importDefault(require("./orientation.module.css"));
const Divider = ({ orientation = "horizontal", size, ...args }) => {
    args.className = (0, classnames_1.default)(global_module_css_1.default[`${args.color}`], orientation_module_css_1.default.element, orientation_module_css_1.default[orientation], args.className);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ...args, style: { ["--divider-size"]: `${size || 1}px` } })));
};
exports.default = Divider;
