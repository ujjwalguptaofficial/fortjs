import { Fort, textResult, redirectResult } from "fortjs";
import { Wall1 } from "@/walls/wall1";
import { createApp } from "@/index";

describe('Wall1', () => {
    let wall: Wall1;
    beforeAll(async () => {
        await createApp();
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
        return Fort.destroy();
    });
});