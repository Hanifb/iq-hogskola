import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'components', 'hogskola.htm'))
})

app.get('/twitter-player.html', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'twitter-player.html'))
})



app.get('/embedtest', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'components', 'hogskola.htm'))
})

export default app
