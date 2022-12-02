import { Router } from 'express'

import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  bookExists,
} from '../controllers/books.controller'

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    res.json(await getBooks())
  } catch (error: any) {
    next(error.message)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (!parseInt(req.params.id)) throw new Error('Invalid ID')

    res.json(await getBook(req.params.id))
  } catch (error: any) {
    next(error.message)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { isbn, author, title, editorial, printingDate, quantity } = req.body

    if (!isbn) throw new Error('ISBN is required')
    if (!author) throw new Error('Author is required')
    if (!title) throw new Error('Title is required')
    if (!editorial) throw new Error('Editorial is required')
    if (!printingDate) throw new Error('Printing Date is required')
    if (!quantity || !parseInt(quantity)) throw new Error('Quantity is required')

    await bookExists(isbn, title)

    await addBook({ isbn, author, title, editorial, printingDate, quantity })
    res.json({ status: 'Book saved' })
  } catch (error: any) {
    next(error.message)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { isbn, author, title, editorial, printingDate, quantity } = req.body

    if (!isbn) throw new Error('ISBN is required')
    if (!author) throw new Error('Author is required')
    if (!title) throw new Error('Title is required')
    if (!editorial) throw new Error('Editorial is required')
    if (!printingDate) throw new Error('Printing Date is required')
    if (!quantity || !parseInt(quantity)) throw new Error('Quantity is required')

    await bookExists(isbn, title)

    await updateBook(req.params.id, {
      isbn,
      author,
      title,
      editorial,
      printingDate,
      quantity,
    })
    res.json({ status: 'Book updated' })
  } catch (error: any) {
    next(error.message)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if (!parseInt(req.params.id)) throw new Error('Invalid ID')
    if (!(await getBook(req.params.id))) throw new Error('Book not found')

    await deleteBook(req.params.id)
    res.json({ status: 'Book deleted' })
  } catch (error: any) {
    next(error.message)
  }
})

export default router
