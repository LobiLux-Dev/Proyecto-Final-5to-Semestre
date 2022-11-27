import '../styles/pages/Contact.css'
import { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [issue, setIssue] = useState('')
  const [message, setMessage] = useState('')

  const [touchName, setTouchName] = useState(false)
  const [touchEmail, setTouchEmail] = useState(false)
  const [touchIssue, setTouchIssue] = useState(false)
  const [touchMessage, setTouchMessage] = useState(false)

  const [changeName, setChangeName] = useState(false)
  const [changeEmail, setChangeEmail] = useState(false)
  const [changeIssue, setChangeIssue] = useState(false)
  const [changeMessage, setChangeMessage] = useState(false)

  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validIssue, setValidIssue] = useState(false)
  const [validMessage, setValidMessage] = useState(false)

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    document.title = 'B-LOQ - Contact Us'

    setValidName(name.length >= 3 && touchName && changeName)
    setValidEmail(!!email && email.length >= 5 && touchEmail && changeEmail)
    setValidIssue(issue.length >= 5 && touchIssue && changeIssue)
    setValidMessage(message.length >= 20 && touchMessage && changeMessage)

    setDisabled(!validName || !validEmail || !validIssue || !validMessage)
  }, [
    name,
    email,
    issue,
    message,
    touchName,
    touchEmail,
    touchIssue,
    touchMessage,
    changeName,
    changeEmail,
    changeIssue,
    changeMessage,
    validName,
    validEmail,
    validIssue,
    validMessage,
  ])

  const handleName = (event: any) => {
    setName(event.target.value)
    setChangeName(true)
  }

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
    setChangeEmail(true)
  }

  const handleIssue = (event: any) => {
    setIssue(event.target.value)
    setChangeIssue(true)
  }
  const handleMessage = (event: any) => {
    setMessage(event.target.value)
    setChangeMessage(true)
  }

  const handleTouchName = () => setTouchName(true)
  const handleTouchEmail = () => setTouchEmail(true)
  const handleTouchIssue = () => setTouchIssue(true)
  const handleTouchMessage = () => setTouchMessage(true)

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
            isValid={validName}
            onChange={handleName}
            onFocus={handleTouchName}
            title='Introduce tu Nombre'
            placeholder='Introduce tu Nombre'
            isInvalid={!name && touchName && changeName}
          />
          <Form.Control.Feedback type='invalid'>
            Este campo es obligatorio
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>
            Email <span>*</span>
          </Form.Label>
          <Form.Control
            required
            type='email'
            isValid={validEmail}
            onChange={handleEmail}
            onFocus={handleTouchEmail}
            title='Introduce tu Email'
            placeholder='Introduce tu Email'
            isInvalid={!email && touchEmail && changeEmail}
          />
          <Form.Control.Feedback type='invalid'>
            Este campo es obligatorio y debe ser un email válido
          </Form.Control.Feedback>
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
            isValid={validIssue}
            onChange={handleIssue}
            onFocus={handleTouchIssue}
            title='Introduce el Asunto'
            isInvalid={!issue && touchIssue && changeIssue}
            placeholder='Introduce el Asunto (5 caracteres minimo)'
          />
          <Form.Control.Feedback type='invalid'>
            Este campo es obligatorio
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>
            Mensaje <span>*</span>
          </Form.Label>
          <Form.Control
            required
            as='textarea'
            minLength={20}
            isValid={validMessage}
            onChange={handleMessage}
            onFocus={handleTouchMessage}
            title='Introduce tu Mensaje'
            isInvalid={!message && touchMessage && changeMessage}
            placeholder='Introduce tu Mensaje (20 caracteres minimo)'
          />
          <Form.Control.Feedback type='invalid'>
            Este campo es obligatorio
          </Form.Control.Feedback>
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
