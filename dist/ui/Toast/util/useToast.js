"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = void 0;
const Container_1 = require("../Container");
const useToast = () => {
    const append = (params) => Container_1.toastEmitter.emit("append", params);
    const remove = (id) => Container_1.toastEmitter.emit("remove", id);
    return {
        append,
        remove,
    };
};
exports.useToast = useToast;
