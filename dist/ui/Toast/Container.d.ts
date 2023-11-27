/// <reference types="node" />
import React from "react";
import EventEmitter from "events";
import { ToastContainerProps } from "../../types/toast";
export declare const toastEmitter: EventEmitter;
declare function Container({ ...args }: ToastContainerProps): React.JSX.Element;
declare namespace Container {
    var useToast: () => {
        append: (params: import("../../types/toast").FoxyComponentToastEmitterParams) => boolean;
        remove: (id: string) => boolean;
    };
}
export default Container;
