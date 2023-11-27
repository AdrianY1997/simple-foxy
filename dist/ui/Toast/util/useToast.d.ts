import { FoxyComponentToastEmitterParams } from "../../../types/toast";
export declare const useToast: () => {
    append: (params: FoxyComponentToastEmitterParams) => boolean;
    remove: (id: string) => boolean;
};
