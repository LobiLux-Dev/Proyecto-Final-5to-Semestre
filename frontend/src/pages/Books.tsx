import axios from 'axios'
import '../styles/pages/Books.css'
import { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { BsPlusLg } from 'react-icons/bs'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    document.title = 'B-LOQ - Books'

    axios
      .get('http://localhost:3001/api/books')
      .then(res => {
        setBooks(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <Container id='books-container'>
      {books.map((book: any) => (
        <Card key={book.id}>
          <Card.Header>
            <img
              src={process.env.PUBLIC_URL + '/static/images/image-not-available.png'}
              alt='Book Cover'
            />
          </Card.Header>
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Card.Text>{book.author}</Card.Text>
              <Card.Text>{book.editorial}</Card.Text>
            </Row>
          </Card.Footer>
        </Card>
      ))}
      <Card>
        <Card.Body>
          <BsPlusLg />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Books
