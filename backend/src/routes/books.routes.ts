import { Router } from 'express'

import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} from '../controllers/books.controller'

const router = Router()

router.get('/', async (req, res) => {
  res.json(await getBooks())
})

router.get('/:id', async (req, res) => {
  res.json(await getBook(req.params.id))
})

router.post('/', async (req, res) => {
  const { isbn, author, title, editorial, printingDate, quantity } = req.body

  await addBook({ isbn, author, title, editorial, printingDate, quantity })
  res.json({ status: 'Book saved' })
})

router.put('/:id', async (req, res) => {
  const { isbn, author, title, editorial, printingDate, quantity } = req.body

  await updateBook(req.params.id, {
    isbn,
    author,
    title,
    editorial,
    printingDate,
    quantity,
  })
  res.json({ status: 'Book updated' })
})

router.delete('/:id', async (req, res) => {
  await deleteBook(req.params.id)
  res.json({ status: 'Book deleted' })
})

export default router
