import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()


app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'components', 'hogskola.htm'))
})



app.get('/embedtest', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'components', 'hogskola.htm'))
})

export default app
