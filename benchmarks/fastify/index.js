// Require the framework and instantiate it
const fastify = require('fastify')()

// Declare a route
fastify.get('/', function handler(request, reply) {
    reply.send("Hello World!")
})

// Run the server!
fastify.listen({ port: 3001 }, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log('Example app listening on port 3001!');
})