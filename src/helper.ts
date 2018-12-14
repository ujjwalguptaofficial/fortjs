// import { IRouteUrlInfo } from "./interfaces";
// import { Util } from "./util";


// export function getRouteDetail(url: string): IRouteUrlInfo {
//     const splittedValue = url.split('/');
//     splittedValue.splice(0, 1);
//     const defaultAction = "default";
//     const defaultController = "Default";
//     let detail: IRouteUrlInfo = {
//         actionName: Util.isNullOrEmpty(splittedValue[1]) ?
//             defaultAction : splittedValue[1],
//         controllerName: Util.isNullOrEmpty(splittedValue[0]) ?
//             defaultController : splittedValue[0]
//     }
//     return detail;
// }