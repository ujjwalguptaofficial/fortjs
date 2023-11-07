const { exec } = require("child_process");
const autocannon = require('autocannon');

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
        command: `cd fort && npm run dev & sleep 5`,
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
    {
        command: `cd koa && npm run start & sleep 5`,
        name: "KOA",
        port: 3070
    },
]
const runTest = async (index = 0) => {
    if (index >= apps.length) {
        console.log(`---------Benchmark finished----------`);
        console.table(
            apps.map(item => {
                const result = item.result;
                return {
                    Name: item.name,
                    TotalRequestCount: result.requests.total,
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