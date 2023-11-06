const autocannon = require('autocannon');

const execute = async () => {

  const instance = await autocannon({
    url: 'http://localhost:8080/friends',
    connections: 10,
    pipelining: 1,
    duration: 10
  });

  // instance..on('done', () => {
  console.log('Test completed.', instance);
  // console.log('Requests per second: ', instance.stats.requests);
  // console.log('Latency average: ', instance.stats.latency.avg);
  // console.log('Latency max: ', instance.stats.latency.max);
  // });

  // instance.run();
}

execute().then(_ => {

});