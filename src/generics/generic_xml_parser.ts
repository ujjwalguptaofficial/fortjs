import { XmlParser } from "../abstracts";

export class GenericXmlParser implements XmlParser {
    async parse(xml: string): Promise<string> {
        // tslint:disable-next-line
        throw "no xml parser configured";
    }
}