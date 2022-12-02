import morgan from 'morgan'
import express from 'express'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send('Hello World!'))

export default app
