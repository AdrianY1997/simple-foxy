"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("./extends/Div");
const Section_1 = require("./extends/Section");
const Form_1 = require("./extends/Form");
const Box = (props) => {
    const components = {
        div: (0, Div_1.Div)(props),
        section: (0, Section_1.Section)(props),
        form: (0, Form_1.Form)(props),
    };
    return components[props.component || "div"];
};
exports.default = Box;
