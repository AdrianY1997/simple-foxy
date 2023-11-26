/// <reference types="react" />
import { FoxyComponentBoxTypeGetter } from "../../types/box";
declare const getComponent: ({ type, children, ...args }: FoxyComponentBoxTypeGetter) => import("react").ReactNode;
export { getComponent };
