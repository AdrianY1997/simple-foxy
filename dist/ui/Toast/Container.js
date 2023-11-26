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
exports.toastEmitter = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const _1 = require("./");
const context_1 = __importDefault(require("./util/context"));
const useToast_1 = require("./util/useToast");
const events_1 = __importDefault(require("events"));
const uuid_1 = require("uuid");
const toast_module_css_1 = __importDefault(require("./toast.module.css"));
exports.toastEmitter = new events_1.default();
function Container({ ...args }) {
    const [toasts, setToasts] = (0, react_1.useState)([]);
    args.className = (0, classnames_1.default)(toast_module_css_1.default.container);
    const hideToast = (0, react_1.useCallback)(() => {
        setToasts([]);
    }, []); // Dependencias vacías ya que la función no utiliza variables externas.
    (0, react_1.useEffect)(() => {
        let interval = null;
        const appendListener = (toast) => {
            clearTimeout(interval);
            setToasts((prev) => [...prev, { ...toast, ["id"]: (0, uuid_1.v4)() }]);
            interval = setTimeout(() => hideToast(), 15000);
        };
        exports.toastEmitter.on("append", appendListener);
        return () => {
            exports.toastEmitter.off("append", appendListener);
        };
    }, [hideToast]);
    return (react_1.default.createElement(context_1.default.Provider, { value: { toasts, setToasts } }, toasts.length !== 0 && (react_1.default.createElement("div", { ...args }, toasts.map((e, i) => (react_1.default.createElement(react_1.Fragment, { key: i },
        react_1.default.createElement(_1.Element, { data: e }))))))));
}
Container.useToast = useToast_1.useToast;
exports.default = Container;
