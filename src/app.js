const fastify = require("fastify")()
fastify.setErrorHandler((error, request, reply) => {
  console.error(`[fastify]`, error)
  reply.status(503).send({ error: 'Vui lòng thử lại sau.' })
})

fastify.get("/", async (req, reply) => {
  reply.header("Content-Type", "text/plain").code(200)
    .send('OK')
})

fastify.listen({ port: 3000, host: '0.0.0.0' }, () => {
  console.log('Server started')
})
