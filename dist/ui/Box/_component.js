"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponent = void 0;
const Div_1 = require("./extends/Div");
const Form_1 = require("./extends/Form");
const Section_1 = require("./extends/Section");
const getComponent = ({ type, children, ...args }) => {
    const components = {
        div: (0, Div_1.Div)({ children: children, args: args }),
        section: (0, Section_1.Section)({ children: children, args: args }),
        form: (0, Form_1.Form)({ children: children, args: args }),
    };
    return components[type];
};
exports.getComponent = getComponent;
