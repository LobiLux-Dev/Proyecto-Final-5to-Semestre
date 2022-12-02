import morgan from 'morgan'
import express from 'express'

import booksRoutes from './routes/books.routes'

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/books', booksRoutes)

export default app
