import axios from 'axios'
import '../styles/pages/Books.css'
import { BsPlusLg } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Modal, Row } from 'react-bootstrap'

const Books = () => {
  const [books, setBooks] = useState([])

  const [show, setShow] = useState(false)

  const getBooks = () => {
    axios
      .get('http://localhost:3001/api/books')
      .then(res => {
        setBooks(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    document.title = 'B-LOQ - Books'

    getBooks()
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const data = new FormData(event.target)
    const book = {
      isbn: data.get('isbn'),
      author: data.get('autor'),
      title: data.get('titulo'),
      description: data.get('descripcion'),
      editorial: data.get('editorial'),
      printingDate: data.get('impresion'),
      quantity: data.get('cantidad'),
    }

    axios
      .post('http://localhost:3001/api/books', book)
      .then(res => {
        res.status === 200 && getBooks()
      })
      .catch(error => {
        console.error(error)
      })

    handleClose()
  }

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
      <Card onClick={handleShow}>
        <Card.Body>
          <BsPlusLg />
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='titulo'>
                Titulo
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Titulo'
                id='titulo'
                name='titulo'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='autor'>
                Autor
              </Form.Label>
              <Form.Control type='text' placeholder='Autor' id='autor' name='autor' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='descripcion'>
                Descripcion
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Descripcion'
                id='descripcion'
                name='descripcion'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='editorial'>
                Editorial
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Editorial'
                id='editorial'
                name='editorial'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='Cantidad'>
                Cantidad
              </Form.Label>
              <Form.Control
                type='number'
                placeholder='Cantidad'
                id='cantidad'
                name='cantidad'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='isbn'>
                ISBN
              </Form.Label>
              <Form.Control type='text' placeholder='ISBN' id='isbn' name='isbn' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='mb-1' htmlFor='impresion'>
                Fecha de Impresion
              </Form.Label>
              <Form.Control type='date' id='impresion' name='impresion' />
            </Form.Group>
            <Button variant='primary' type='submit' className='ps-3 pe-3'>
              Añadir
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Books
