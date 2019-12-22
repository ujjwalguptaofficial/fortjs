import { FortGlobal } from "../fort_global";

export const isEnvProduction = () => {
    return FortGlobal.isProduction;
};