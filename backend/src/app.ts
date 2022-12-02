import cors from 'cors'
import morgan from 'morgan'
import express from 'express'

import booksRoutes from './routes/books.routes'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }))

// Routes
app.use('/api/books', booksRoutes)

export default app
