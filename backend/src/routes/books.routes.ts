import { Router } from 'express'

// Book Model
import Book from '../models/book.model'

const router = Router()

// GET all books
router.get('/', async (req, res) => {
  const books = await Book.findAll({ logging: false })

  res.json(books)
})

// GET one book
router.get('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id, { logging: false })

  res.json(book)
})

// POST one book -> ADD a new book
router.post('/', async (req, res) => {
  const { isbn, author, title, editorial, printingDate, quantity } = req.body

  await Book.create(
    { isbn, author, title, editorial, printingDate, quantity },
    { logging: false }
  )

  res.json({ status: 'Book saved' })
})

// PUT one book -> UPDATE a book
router.put('/:id', async (req, res) => {
  const { isbn, author, title, editorial, printingDate, quantity } = req.body

  await Book.update(
    { isbn, author, title, editorial, printingDate, quantity },
    { where: { id: req.params.id }, logging: false }
  )

  res.json({ status: 'Book updated' })
})

// DELETE one book
router.delete('/:id', async (req, res) => {
  await Book.destroy({ where: { id: req.params.id }, logging: false })

  res.json({ status: 'Book deleted' })
})

export default router
