import { Component } from "./component";

export abstract class XmlParser extends Component {
    abstract parse(xml: string): string;
}
