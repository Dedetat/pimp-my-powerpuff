const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const serveStatic = require('koa-static')

const PORT = process.env.PORT || 4000
const app = new Koa()

let id = 2
const powerpuffs = [
  {
    id: 'powerpuff-1',
    name: 'Delphine',
    style: {
      eye: { color: 'green' },
      dress: { color: 'green' },
      hair: { color: 'green', type: 0 },
    },
  },
  {
    id: 'powerpuff-2',
    name: 'Fabien',
    style: {
      eye: { color: 'red' },
      dress: { color: 'red' },
      hair: { color: 'red', type: 1 },
    },
  },
]

app.use(serveStatic(__dirname + '/../build'))
app.use(bodyParser())
app.use(async (ctx) => {
  if (!ctx.path.includes('/api')) return

  switch (ctx.method) {
    case 'GET': {
      ctx.body = powerpuffs
      break
    }
    case 'POST': {
      id += 1

      powerpuffs.push(Object.assign(
        ctx.request.body,
        {
          id: `powerpuff-${id}`,
        },
      ))

      ctx.body = powerpuffs
      break
    }
    default: {
      ctx.status = 404
      break
    }
  }
})

app.listen(PORT)

console.log(`[api] listen to ${PORT}`)
