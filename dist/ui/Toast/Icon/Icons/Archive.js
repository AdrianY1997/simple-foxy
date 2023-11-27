"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Archive({ ...args }) {
    return (react_1.default.createElement("svg", { ...args, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
        react_1.default.createElement("rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }),
        react_1.default.createElement("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }),
        react_1.default.createElement("path", { d: "M10 12h4" })));
}
exports.default = Archive;
