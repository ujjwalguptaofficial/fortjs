export abstract class XmlParser {
    abstract parse(xml: string): Promise<string>;
}