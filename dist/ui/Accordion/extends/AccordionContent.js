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
const _hook_1 = require("../_hook");
const accordion_module_css_1 = __importDefault(require("../accordion.module.css"));
const classnames_1 = __importDefault(require("classnames"));
function AccordionContent({ children, }) {
    const { isShow } = (0, _hook_1.useAccordionContext)();
    const [height, setHeight] = (0, react_1.useState)(0);
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setHeight(ref.current?.scrollHeight);
            ref.current?.style.setProperty("height", "0");
            ref.current?.style.removeProperty("visibility");
            ref.current?.style.removeProperty("overflow");
            ref.current?.style.removeProperty("position");
        }, 100);
    }, []);
    (0, react_1.useEffect)(() => {
        if (isShow) {
            ref.current?.style.setProperty("height", height + "px");
            setTimeout(() => {
                ref.current?.style.setProperty("height", "auto");
            }, 200);
        }
        else {
            setHeight(ref.current?.clientHeight);
            ref.current?.style.setProperty("height", ref.current?.clientHeight + "px");
            setTimeout(() => {
                ref.current?.style.setProperty("height", "0");
            }, 1);
        }
    }, [isShow]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: (0, classnames_1.default)(accordion_module_css_1.default.content), style: {
                visibility: "hidden",
                height: "auto",
                overflow: "visible",
                position: "absolute",
            }, ref: ref }, children)));
}
exports.default = AccordionContent;
