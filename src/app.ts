import { Hono } from 'hono'
export const app = new Hono()


app.get('/', (c) => {
  return c.json({
    success: true,
    message: process.env.API_NAME || 'World Cup Ticketing API'
  })
})

app.get('/health', (c) => {
  return c.json({
    success: true,
    status: 'ok',
    environment: process.env.NODE_ENV || 'unknown',
    host: process.env.HOST || 'unknown',
    port: Number(process.env.PORT) || 3000
  })
})