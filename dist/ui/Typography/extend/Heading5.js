"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading5 = void 0;
const react_1 = __importDefault(require("react"));
const Heading5 = ({ children, ...args }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h5", { ...args }, children)));
};
exports.Heading5 = Heading5;
