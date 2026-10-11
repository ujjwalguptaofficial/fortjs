import { Controller, customResult, http, textResult } from "fortjs";
import httpClient from 'http';

export class SwaggerController extends Controller {

    @http.get("/before")
    async beforeWildCard() {
        return textResult(`before WildCard`)
    }

    @http.get("/*")
    async wildcard() {
        const path = this.param['*'];
        console.log(`hit by path`, path);
        return customResult((option) => {
            const req = option.request;
            const res = option.response;
            const options = {
                hostname: 'localhost',
                port: 8080,
                path: `/${path}`,          // Same URL path forward hoga
                method: req.method,      // GET, POST, PUT, etc.
                headers: req.headers     // Client ke saari headers pass kar do
            };

            // Target server ko request bhejo
            const proxyReq = httpClient.request(options, (proxyRes) => {
                // Target server ka status aur headers client ko wapas do
                res.writeHead(proxyRes.statusCode || 500, proxyRes.headers);

                // Target server ka response client ki taraf pipe kar do
                proxyRes.pipe(res as any, { end: true });
            });

            proxyReq.on('error', (err) => {
                console.error('Proxy request failed:', err);
                if (!option.isResponseFinished()) {
                    res.writeHead(502, 'Bad Gateway (Proxy Error)').end();
                    // res.status(502).send('Bad Gateway (Proxy Error)');
                }
            });

            // Client ki request ka body (agar POST/PUT hai) target server ko pipe kar do
            (req as any).pipe(proxyReq, { end: true });
        })
    }

    @http.get("/after")
    async afterWildCard() {
        return textResult(`after WildCard`);
    }

}