"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariants = void 0;
const Caption_1 = require("./extend/Caption");
const Heading1_1 = require("./extend/Heading1");
const Heading2_1 = require("./extend/Heading2");
const Heading3_1 = require("./extend/Heading3");
const Heading4_1 = require("./extend/Heading4");
const Heading5_1 = require("./extend/Heading5");
const Heading6_1 = require("./extend/Heading6");
const Paragraph_1 = require("./extend/Paragraph");
const getVariants = ({ variant, children, ...args }) => {
    const variantClassses = {
        h1: (0, Heading1_1.Heading1)({ children: children, ...args }),
        h2: (0, Heading2_1.Heading2)({ children: children, ...args }),
        h3: (0, Heading3_1.Heading3)({ children: children, ...args }),
        h4: (0, Heading4_1.Heading4)({ children: children, ...args }),
        h5: (0, Heading5_1.Heading5)({ children: children, ...args }),
        h6: (0, Heading6_1.Heading6)({ children: children, ...args }),
        paragraph: (0, Paragraph_1.Paragraph)({ children: children, ...args }),
        caption: (0, Caption_1.Caption)({ children: children, ...args }),
    };
    return variantClassses[variant];
};
exports.getVariants = getVariants;
