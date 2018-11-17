import { getApp } from "./create";

export function destroy(callback?: Function) {
    getApp().close(callback);
}