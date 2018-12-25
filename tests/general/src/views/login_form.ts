import { View, declareView } from "eshtml";

@declareView('login_form')
export class LoginForm implements View {
    render(model) {
        return `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>Login</title>
          </head>
          <body>
          <form method="post">
            <input type="text" name="emailId" placeholder="emailId"/>
            <input type="text" name="password" placeholder="password"/>
            <button type="submit">Login</button>
          </form>
          </body>
        </html>`
    }
}