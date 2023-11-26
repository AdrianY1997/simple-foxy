"use client";

import { FoxyComponentToastEmitterParams } from "../../../types/toast";
import { toastEmitter } from "../Container";

export const useToast = () => {
  const append = (params: FoxyComponentToastEmitterParams) =>
    toastEmitter.emit("append", params);
  const remove = (id: string) => toastEmitter.emit("remove", id);

  return {
    append,
    remove,
  };
};
