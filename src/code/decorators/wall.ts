
import { Global } from "../global";

export function wall(): ClassDecorator {
    return (target: any) => {
        Global.walls.push(target as any);
    };
}