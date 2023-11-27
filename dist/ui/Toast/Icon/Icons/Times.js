"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Times({ ...args }) {
    return (react_1.default.createElement("svg", { ...args, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        react_1.default.createElement("path", { d: "M18 6 6 18" }),
        react_1.default.createElement("path", { d: "m6 6 12 12" })));
}
exports.default = Times;
