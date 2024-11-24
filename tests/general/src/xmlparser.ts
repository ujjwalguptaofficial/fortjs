import { XmlParser } from "fortjs";

export class XmlToJsonParser extends XmlParser {

    parse(xml) {
        if (this.request.headers['return-xml'] === 'true') {
            return `<xml>${xml}</xml><method>${this.request.method}</method><url>${this.request.url}</url><contenttype>${this.request.headers['content-type']}</contenttype>`;
        }
        // tslint:disable-next-line
        throw {
            message: "no xml parser configured"
        };
    }

}
