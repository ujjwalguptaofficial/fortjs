import { Fort, textResult, redirectResult } from "fortjs";
import { initServer } from "../index";
import { MySingleton } from "../extra/singleton";
import { Wall1 } from "./wall1";

describe('Wall1', () => {
    let app: Fort;
    let wall: Wall1;
    beforeAll(async () => {
        app = await initServer();
        wall = new Wall1();
        wall.initialize();
    });

    it('incoming', async () => {
        await wall.onIncoming();
        expect(wall.response.hasHeader('Custom-Header-From-Incoming-Wall')).toEqual(true);
        expect(wall.response.hasHeader('Custom-Header-From-Outgoing-Wall')).toEqual(false);
    });

    it('outgoing', async () => {
        await wall.onOutgoing();
        expect(wall.response.hasHeader('Custom-Header-From-Incoming-Wall')).toEqual(true);
        expect(wall.response.hasHeader('Custom-Header-From-Outgoing-Wall')).toEqual(true);
    });

    afterAll(() => {
        return app.destroy();
    });
});