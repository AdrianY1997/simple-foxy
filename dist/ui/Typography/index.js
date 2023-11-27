"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Caption_1 = require("./extend/Caption");
const Heading1_1 = require("./extend/Heading1");
const Heading2_1 = require("./extend/Heading2");
const Heading3_1 = require("./extend/Heading3");
const Heading4_1 = require("./extend/Heading4");
const Heading5_1 = require("./extend/Heading5");
const Heading6_1 = require("./extend/Heading6");
const Paragraph_1 = require("./extend/Paragraph");
const global_module_css_1 = __importDefault(require("../global.module.css"));
const typography_module_css_1 = __importDefault(require("./typography.module.css"));
const classnames_1 = __importDefault(require("classnames"));
const Typography = ({ children, variant = "paragraph", ...args }) => {
    args.className = (0, classnames_1.default)(global_module_css_1.default[`${args.color}`], typography_module_css_1.default.element, typography_module_css_1.default[variant], args.className);
    const variantClassses = {
        h1: (0, Heading1_1.Heading1)({ children, ...args }),
        h2: (0, Heading2_1.Heading2)({ children, ...args }),
        h3: (0, Heading3_1.Heading3)({ children, ...args }),
        h4: (0, Heading4_1.Heading4)({ children, ...args }),
        h5: (0, Heading5_1.Heading5)({ children, ...args }),
        h6: (0, Heading6_1.Heading6)({ children, ...args }),
        paragraph: (0, Paragraph_1.Paragraph)({ children, ...args }),
        caption: (0, Caption_1.Caption)({ children, ...args }),
    };
    return variantClassses[variant];
};
exports.default = Typography;
