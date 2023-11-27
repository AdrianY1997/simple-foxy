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
const Icon_1 = require("./Icon");
const Button_1 = __importDefault(require("../Button"));
const Tooltip_1 = __importDefault(require("../Tooltip"));
const global_module_css_1 = __importDefault(require("../global.module.css"));
const toast_module_css_1 = __importDefault(require("./toast.module.css"));
function Element({ data, ...args }) {
    const elementRef = (0, react_1.useRef)(null);
    const barRef = (0, react_1.useRef)(null);
    args.className = (0, classnames_1.default)(toast_module_css_1.default.element);
    const contentClass = (0, classnames_1.default)(toast_module_css_1.default.content, toast_module_css_1.default[data.title ? "title" : "no-title"]);
    const barClass = (0, classnames_1.default)(global_module_css_1.default[`color-${data.type}`], toast_module_css_1.default.bar, toast_module_css_1.default["loader-0"]);
    function hideToast() {
        elementRef.current?.classList.add((0, classnames_1.default)(toast_module_css_1.default.hide));
        elementRef.current?.style.setProperty("height", `${elementRef.current?.offsetHeight}px`);
        setTimeout(() => {
            elementRef.current?.classList.add((0, classnames_1.default)(toast_module_css_1.default.shrink));
            setTimeout(() => elementRef.current?.classList.add(toast_module_css_1.default.remove), 200);
        }, 200);
    }
    function handleRemoveToast() {
        hideToast();
    }
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            barRef.current?.classList.remove((0, classnames_1.default)(toast_module_css_1.default["loader-0"]));
            barRef.current?.classList.add((0, classnames_1.default)(toast_module_css_1.default["loader-full"]));
        }, 1);
        setTimeout(() => hideToast(), 15000);
    }, [hideToast]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { ref: elementRef, ...args },
            react_1.default.createElement("div", { className: contentClass },
                react_1.default.createElement("div", { className: (0, classnames_1.default)(toast_module_css_1.default["title-container"]) },
                    data.title && (react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", null, data.title))),
                    react_1.default.createElement("div", { className: (0, classnames_1.default)(toast_module_css_1.default["close-container"]) },
                        react_1.default.createElement(Tooltip_1.default, { title: "delete", placement: "top" },
                            react_1.default.createElement(Button_1.default, { rounded: "full", variant: "outlined", color: "error", size: "small", onClick: handleRemoveToast },
                                react_1.default.createElement(Icon_1.IconTimes, { height: "1rem" }))))),
                react_1.default.createElement("div", { className: (0, classnames_1.default)(toast_module_css_1.default["bar-container"]) },
                    react_1.default.createElement("div", { ref: barRef, className: barClass }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("p", { className: (0, classnames_1.default)(toast_module_css_1.default.message) }, data.message)))));
}
exports.default = Element;
