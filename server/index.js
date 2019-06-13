const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
app.use(express.json())

const config = require('../nuxt.config.js')
const skiCalculator = require('../middleware/server/skiCalculator.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // compute ski rules endpoint - add before nuxt middleware
  app.post('/skicalc', skiCalculator)

  app.use(nuxt.render)

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
