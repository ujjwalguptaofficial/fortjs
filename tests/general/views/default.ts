import { View, declareView } from "eshtml";

@declareView('index')
export class Default implements View {
    render(model) {
        return `<html>
        <head>
            <title>${model.title}</title>
        </head>
        <body>
            <h1>Index</h1>
        </body>
        </html>
        `
    }
}