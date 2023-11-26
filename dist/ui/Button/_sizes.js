"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoxyComponentButtonSizes = void 0;
const FoxyComponentButtonSizes = {
    minimal: (rounded) => `${rounded ? "p-0.5" : "px-1 py-0.5 text-sm"}`,
    small: (rounded) => (rounded ? "p-1" : "px-2 py-1"),
    normal: (rounded) => `${rounded ? "p-2" : "px-4 py-2"} text-lg`,
    big: (rounded) => `${rounded ? "p-3" : "px-5 py-3"} text-xl`,
};
exports.FoxyComponentButtonSizes = FoxyComponentButtonSizes;
