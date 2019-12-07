export const getClassName = (target): string => {
    return target.name || (target.constructor && target.constructor.name);
};