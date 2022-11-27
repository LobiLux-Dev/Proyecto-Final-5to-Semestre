import { useEffect } from 'react'

const Books = () => {
  useEffect(() => {
    document.title = 'B-LOQ - Books'
  })

  return <h1>Books</h1>
}

export default Books
