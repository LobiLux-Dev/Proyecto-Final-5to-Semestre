import { Op } from 'sequelize'
import { Router } from 'express'

import {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
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

    res.json(await getBook({ id: req.params.id }))
  } catch (error: any) {
    next(error.message)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { isbn, author, title, description, editorial, printingDate, quantity } =
      req.body

    if (!isbn) throw new Error('ISBN is required')
    if (!author) throw new Error('Author is required')
    if (!title) throw new Error('Title is required')
    if (!description) throw new Error('Description is required')
    if (!editorial) throw new Error('Editorial is required')
    if (!printingDate) throw new Error('Printing Date is required')
    if (!quantity && quantity !== 0) throw new Error('Quantity is required')
    if (!parseInt(quantity) && quantity != 0) throw new Error('Invalid Quantity')
    if (quantity < 0) throw new Error('Quantity must be greater than 0')

    if (await getBook({ isbn })) throw new Error('ISBN already exists')
    if (await getBook({ title })) throw new Error('Title already exists')

    await addBook({
      isbn,
      author,
      title,
      description,
      editorial,
      printingDate,
      quantity,
    })
    res.json({ status: 'Book saved' })
  } catch (error: any) {
    next(error.message)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { isbn, author, title, description, editorial, printingDate, quantity } =
      req.body

    if (!parseInt(req.params.id)) throw new Error('Invalid ID')

    if (!isbn) throw new Error('ISBN is required')
    if (!author) throw new Error('Author is required')
    if (!title) throw new Error('Title is required')
    if (!description) throw new Error('Description is required')
    if (!editorial) throw new Error('Editorial is required')
    if (!printingDate) throw new Error('Printing Date is required')
    if (!quantity && quantity !== 0) throw new Error('Quantity is required')
    if (!parseInt(quantity) && quantity != 0) throw new Error('Invalid Quantity')
    if (quantity < 0) throw new Error('Quantity must be greater than 0')

    if (await getBook({ [Op.and]: { [Op.not]: { id: req.params.id }, isbn } }))
      throw new Error('ISBN already exists')
    if (await getBook({ [Op.and]: { [Op.not]: { id: req.params.id }, title } }))
      throw new Error('Title already exists')

    await updateBook(req.params.id, {
      isbn,
      author,
      title,
      description,
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
    if (!(await getBook({ id: req.params.id }))) throw new Error('Book not found')

    await deleteBook(req.params.id)
    res.json({ status: 'Book deleted' })
  } catch (error: any) {
    next(error.message)
  }
})

export default router
