export abstract class XmlParser {
    abstract async parse(xml: string): Promise<string>;
}