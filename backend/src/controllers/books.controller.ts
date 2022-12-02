import Book from '../models/book.model'

type BookType = {
  isbn: string
  author: string
  title: string
  description: string
  editorial: string
  printingDate: Date
  quantity: number
}

export const getBooks = async (options?: any) => {
  return await Book.findAll({ where: options, logging: false })
}

export const getBook = async (options: any) => {
  return await Book.findOne({ where: options, logging: false })
}

export const addBook = async ({
  isbn,
  author,
  title,
  description,
  editorial,
  printingDate,
  quantity,
}: BookType) => {
  await Book.create(
    { isbn, author, title, description, editorial, printingDate, quantity },
    { logging: false }
  )
}

export const updateBook = async (
  id: string,
  { isbn, author, title, description, editorial, printingDate, quantity }: BookType
) => {
  await Book.update(
    { isbn, author, title, description, editorial, printingDate, quantity },
    { where: { id: id }, logging: false }
  )
}

export const deleteBook = async (id: string) => {
  await Book.destroy({ where: { id: id }, logging: false })
}
