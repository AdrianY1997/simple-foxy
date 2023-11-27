"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAccordionContext = void 0;
const react_1 = require("react");
const _context_1 = require("./_context");
const useAccordionContext = () => {
    const context = (0, react_1.useContext)(_context_1.AccordionContext);
    if (!context) {
        throw new Error("Section must be used within a Section Provider");
    }
    return context;
};
exports.useAccordionContext = useAccordionContext;
