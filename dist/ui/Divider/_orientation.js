"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoxyComponentDividerOrientations = void 0;
const FoxyComponentDividerOrientations = {
    horizontal: (size) => {
        return {
            full: "w-full",
            size: {
                height: `${size}px`,
            },
        };
    },
    vertical: (size) => {
        return {
            full: "unset",
            size: {
                width: `${size}px`,
            },
        };
    },
};
exports.FoxyComponentDividerOrientations = FoxyComponentDividerOrientations;
