import '../styles/pages/Contact.css'
import { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    document.title = 'B-LOQ - Contact Us'

    setDisabled(!name || !email || !issue || !message)
  }, [name, email, issue, message])

  const handleName = (event: any) => setName(event.target.value)
  const handleEmail = (event: any) => setEmail(event.target.value)
  const handleIssue = (event: any) => setIssue(event.target.value)
  const handleMessage = (event: any) => setMessage(event.target.value)

  return (
    <Container className='my-4'>
      <h2 className='text-center mb-4'>Formulario de Contacto</h2>
      <Form className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
        <Form.Group controlId='name'>
          <Form.Label>
            Nombre <span>*</span>
          </Form.Label>
          <Form.Control
            required
            type='text'
            onChange={handleName}
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
            onChange={handleEmail}
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
            onChange={handleIssue}
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
            onChange={handleMessage}
            title='Introduce tu Mensaje'
            placeholder='Introduce tu Mensaje (20 caracteres minimo)'
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={disabled}>
          Enviar
        </Button>
        <div>
          <span>*</span> los campos son obligatorios
        </div>
      </Form>
    </Container>
  )
}

export default Contact
