import express from 'express'
import path from 'path'

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})

export default app