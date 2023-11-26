"use client";

import { createContext } from "react";
import { ToastContext as TToastContext } from "../../../types/toast";

const Context = createContext<TToastContext | undefined>(undefined);

export default Context;
