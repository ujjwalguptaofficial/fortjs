import { FortGlobal } from "../fort_global";

export const isEnvDev = () => {
    return FortGlobal.isDevelopment;
};