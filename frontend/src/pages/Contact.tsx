import '../styles/pages/Contact.css'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const Contact = () => {
  useEffect(() => {
    document.title = 'B-LOQ - Contact Us'
  })

  return (
    <Form className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
      <Form.Group controlId='name'>
        <Form.Label>
          Nombre <span>*</span>
        </Form.Label>
        <Form.Control
          required
          type='text'
          title='Introduce tu Nombre'
          placeholder='Introduce tu Nombre'
        />
      </Form.Group>
      <Form.Group controlId='email'>
        <Form.Label>
          Email <span>*</span>
        </Form.Label>
        <Form.Control
          required
          type='email'
          title='Introduce tu Email'
          placeholder='Introduce tu Email'
        />
      </Form.Group>
      <Form.Group controlId='phone'>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type='tel'
          maxLength={10}
          title='Introduce tu Teléfono'
          placeholder='Introduce tu Teléfono'
        />
      </Form.Group>
      <Form.Group controlId='issue'>
        <Form.Label>
          Asunto <span>*</span>
        </Form.Label>
        <Form.Control
          required
          type='text'
          minLength={5}
          title='Introduce el Asunto'
          placeholder='Introduce el Asunto (5 caracteres minimo)'
        />
      </Form.Group>
      <Form.Group controlId='message'>
        <Form.Label>
          Mensaje <span>*</span>
        </Form.Label>
        <Form.Control
          required
          as='textarea'
          minLength={20}
          title='Introduce tu Mensaje'
          placeholder='Introduce tu Mensaje (20 caracteres minimo)'
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Enviar
      </Button>
      <div>
        <span>*</span> los campos son obligatorios
      </div>
    </Form>
  )
}

export default Contact
