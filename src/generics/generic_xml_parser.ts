import { XmlParser } from "../abstracts";
import { IException } from "../interfaces";

export class GenericXmlParser implements XmlParser {
    parse(xml: string): Promise<string> {
        // tslint:disable-next-line
        throw {
            message: "no xml parser configured"
        } as IException;
    }
}