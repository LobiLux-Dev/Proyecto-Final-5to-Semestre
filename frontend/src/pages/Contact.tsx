import '../styles/pages/Contact.css'
import { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [issue, setIssue] = useState('')
  const [message, setMessage] = useState('')

  const [touchName, setTouchName] = useState(false)
  const [touchEmail, setTouchEmail] = useState(false)
  const [touchPhone, setTouchPhone] = useState(false)
  const [touchIssue, setTouchIssue] = useState(false)
  const [touchMessage, setTouchMessage] = useState(false)

  const [changeName, setChangeName] = useState(false)
  const [changeEmail, setChangeEmail] = useState(false)
  const [changePhone, setChangePhone] = useState(false)
  const [changeIssue, setChangeIssue] = useState(false)
  const [changeMessage, setChangeMessage] = useState(false)

  const [validName, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPhone, setValidPhone] = useState(true)
  const [validIssue, setValidIssue] = useState(false)
  const [validMessage, setValidMessage] = useState(false)

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    document.title = 'B-LOQ - Contact Us'

    setDisabled(
      !validName || !validEmail || !validPhone || !validIssue || !validMessage
    )
  }, [validName, validEmail, validPhone, validIssue, validMessage])

  const handleName = (event: any) => {
    const newName = event.target.value

    setName(newName)
    setChangeName(true)
    setValidName(newName.length >= 3 && touchName && changeName)
  }

  const handleEmail = (event: any) => {
    const newEmail = event.target.value

    setEmail(newEmail)
    setChangeEmail(true)
    setValidEmail(
      !!newEmail &&
        newEmail.length >= 5 &&
        touchEmail &&
        changeEmail &&
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
          newEmail
        )
    )
  }

  const handlePhone = (event: any) => {
    const newPhone = event.target.value

    setPhone(newPhone)
    setChangePhone(true)
    setValidPhone(
      (!!newPhone && /^\d{10}$/.test(newPhone) && touchPhone && changePhone) ||
        !newPhone
    )
  }

  const handleIssue = (event: any) => {
    const newIssue = event.target.value

    setIssue(newIssue)
    setChangeIssue(true)
    setValidIssue(newIssue.length >= 5 && touchIssue && changeIssue)
  }

  const handleMessage = (event: any) => {
    const newMessage = event.target.value

    setChangeMessage(true)
    setMessage(newMessage)
    setValidMessage(newMessage.length >= 20 && touchMessage && changeMessage)
  }

  const handleTouchName = () => setTouchName(true)
  const handleTouchEmail = () => setTouchEmail(true)
  const handleTouchPhone = () => setTouchPhone(true)
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
            minLength={3}
            isValid={validName}
            onChange={handleName}
            onFocus={handleTouchName}
            title='Introduce tu Nombre'
            placeholder='Introduce tu Nombre'
            isInvalid={!name && touchName && changeName && !validName}
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
            minLength={5}
            isValid={validEmail}
            onChange={handleEmail}
            onFocus={handleTouchEmail}
            title='Introduce tu Email'
            placeholder='Introduce tu Email'
            isInvalid={!email && touchEmail && changeEmail && !validEmail}
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
            onChange={handlePhone}
            onFocus={handleTouchPhone}
            title='Introduce tu Teléfono'
            isValid={validPhone && !!phone}
            placeholder='Introduce tu Teléfono'
            isInvalid={
              !!phone &&
              touchPhone &&
              changePhone &&
              !validPhone &&
              !/^\d+$/.test(phone)
            }
          />
          <Form.Control.Feedback type='invalid'>
            Introduce un teléfono válido
          </Form.Control.Feedback>
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
            isInvalid={!issue && touchIssue && changeIssue && !validIssue}
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
            isInvalid={!message && touchMessage && changeMessage && !validMessage}
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
