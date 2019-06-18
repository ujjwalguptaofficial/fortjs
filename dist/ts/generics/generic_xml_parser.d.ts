import { XmlParser } from "../abstracts";
export declare class GenericXmlParser implements XmlParser {
    parse(xml: string): Promise<string>;
}
