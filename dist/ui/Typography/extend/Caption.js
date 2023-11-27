"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const global_module_css_1 = __importDefault(require("../../global.module.css"));
const Caption = ({ children, ...args }) => {
    args.className = (0, classnames_1.default)(global_module_css_1.default[`${args.color ? args.color : "disabled"}`], args.className);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { ...args }, children)));
};
exports.Caption = Caption;
