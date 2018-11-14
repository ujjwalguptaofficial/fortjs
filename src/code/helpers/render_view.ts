import { Global } from "../global";

export function renderView(vieWname: string, model: any) {
    return Global.viewEngine.render({
        view: vieWname,
        model: model
    });
}