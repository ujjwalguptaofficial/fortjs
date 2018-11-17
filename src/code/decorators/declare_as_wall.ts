
import { Global } from "../global";

export function declareAsWall(): ClassDecorator {
    return (target: any) => {
        Global.walls.push(target as any);
    };
}