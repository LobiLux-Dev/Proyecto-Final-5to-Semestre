import Book from '../models/book.model'

type BookType = {
  isbn: string
  author: string
  title: string
  editorial: string
  printingDate: Date
  quantity: number
}

export const getBooks = async () => {
  return await Book.findAll({ logging: false })
}

export const getBook = async (id: string) => {
  return await Book.findByPk(id, { logging: false })
}

export const addBook = async ({
  isbn,
  author,
  title,
  editorial,
  printingDate,
  quantity,
}: BookType) => {
  await Book.create(
    { isbn, author, title, editorial, printingDate, quantity },
    { logging: false }
  )
}

export const updateBook = async (
  id: string,
  { isbn, author, title, editorial, printingDate, quantity }: BookType
) => {
  await Book.update(
    { isbn, author, title, editorial, printingDate, quantity },
    { where: { id: id }, logging: false }
  )
}

export const deleteBook = async (id: string) => {
  await Book.destroy({ where: { id: id }, logging: false })
}

export const bookExists = async (isbn: string, title: string) => {
  if (await Book.findOne({ where: { isbn }, logging: false }))
    throw new Error('ISBN already exists')
  if (await Book.findOne({ where: { title }, logging: false }))
    throw new Error('Title already exists')
}
