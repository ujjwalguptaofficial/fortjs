import { Wall, textResult } from "fortjs";
let reqCount = 0;
export class RequestLogger extends Wall {

    private getIP(req) {
        var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress
        return ip;
    }
    async onIncoming() {
        // const log = {
        //     url: this.request.url,
        //     body: this.body
        // }
        // console.log(log);
        this.data.ip = this.getIP(this.request);
        this.data.reqCount = ++reqCount;
        //console.log("reqcount", this.data.reqCount);
        // console.log("body", this.body);
        // console.log("query", this.query);
        if (this.body.blockByWall === true || this.query.blockByWall == 'true') {
            return textResult("blocked by wall");
        }
        return null;
    }
}