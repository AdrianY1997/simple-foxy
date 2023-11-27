"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading2 = void 0;
const react_1 = __importDefault(require("react"));
const Heading2 = ({ children, ...args }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", { ...args }, children)));
};
exports.Heading2 = Heading2;
