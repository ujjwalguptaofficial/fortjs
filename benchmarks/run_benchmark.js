const { exec } = require("child_process");
const autocannon = require('autocannon');
const { Console } = require('console');
const { Transform } = require('stream');

function table(input) {
    // @see https://stackoverflow.com/a/67859384
    const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } })
    const logger = new Console({ stdout: ts })
    logger.table(input)
    const table = (ts.read() || '').toString()
    let result = '';
    for (let row of table.split(/[\r\n]+/)) {
        let r = row.replace(/[^┬]*┬/, '┌');
        r = r.replace(/^├─*┼/, '├');
        r = r.replace(/│[^│]*/, '');
        r = r.replace(/^└─*┴/, '└');
        r = r.replace(/'/g, ' ');
        result += `${r}\n`;
    }
    console.log(result);
}

const runCommand = function (cmd, finishMessage) {
    return new Promise(function (res, rej) {
        var command = exec(cmd);
        command.on("error", function (err) {
            console.error(err);
        })
        command.stdout.on('data', function (data) {
            console.log(data.toString());
        });
        command.stderr.on('data', function (data) {
            console.log(data.toString());
        });
        command.on('exit', function (code) {
            res(code);
        });
    });
}

const apps = [
    {
        command: `cd fort && npm run start:prod & sleep 5`,
        name: "Fort",
        port: 4000
    },
    {
        command: `node express.js & sleep 5`,
        name: "Express",
        port: 8090
    },
    {
        command: `cd nest && npm run start:prod & sleep 5`,
        name: "Nest",
        port: 3000
    },
    // {
    //     command: `cd fastify && npm run start & sleep 5`,
    //     name: "Fastify",
    //     port: 3001
    // },
    {
        command: `cd koa && npm run start & sleep 5`,
        name: "KOA",
        port: 3070
    },
]
const runTest = async (index = 0) => {
    if (index >= apps.length) {
        console.log(`---------Benchmark finished----------`);
        table(
            apps.map(item => {
                const result = item.result;
                return {
                    Name: item.name,
                    TotalRequest: result.requests.total,
                    TotalDuration: result.duration,
                    // request: result.requests,
                    "MinReq/Second": result.requests.min,
                    "AverageReq/Second": result.requests.average,
                    "MaxReq/Second": result.requests.max,
                    MinLatency: result.latency.min,
                    AverageLatency: result.latency.average,
                    MaxLatency: result.latency.max,
                }
            }),
            // ['Name', 'TotalRequest', 'TotalDuration', 'MinReq/Second', 'AverageReq/Second', 'MaxReq/Second', 'MinLatency', 'AverageLatency', 'MaxLatency']
        );
        return;
    }
    const { name, port, command } = apps[index];
    await runCommand(command);
    const result = await autocannon({
        url: `http://localhost:${port}`,
        connections: 1024,
        pipelining: 1,
        duration: 10
    });

    console.log(`---- ${name} ----`);
    console.log(`${result["2xx"]} request sent within ${result.duration} second`);
    await runCommand(`kill -9 $(lsof -t -i:${port} -sTCP:LISTEN)`);
    await runCommand(`sleep 5`);
    console.log(`Test finished for ${name}`);
    apps[index].result = result;
    // console.log(result.latency.m);
    return runTest(index + 1);

}

runTest().then(_ => {
    process.exit();
})