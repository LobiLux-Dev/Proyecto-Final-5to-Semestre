// import express from 'express'
// import path from 'path'

// const app = express()

// const PORT = process.env.PORT || 5000

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('*', (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// )

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`)
// })

// export default app

const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req: any, res: any) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req: any, res: any) => {
  res.send('This is my about route..... ')
})

module.exports = app
