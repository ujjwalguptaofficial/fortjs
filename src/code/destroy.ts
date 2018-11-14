import { app } from "./create";

export function destroy(callback?: Function) {
    app.close(callback);
}