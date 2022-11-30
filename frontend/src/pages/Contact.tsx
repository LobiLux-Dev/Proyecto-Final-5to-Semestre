import axios from 'axios'
import '../styles/pages/Contact.css'
import { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const initialValues = {
  value: '',
  touch: false,
  change: false,
  valid: false,
}

const Contact = () => {
  const [name, setName] = useState(initialValues)
  const [email, setEmail] = useState(initialValues)
  const [phone, setPhone] = useState(initialValues)
  const [issue, setIssue] = useState(initialValues)
  const [message, setMessage] = useState(initialValues)

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    document.title = 'B-LOQ - Contact Us'

    setDisabled(
      !name.valid || !email.valid || !phone.valid || !issue.valid || !message.valid
    )
  }, [name.valid, email.valid, phone.valid, issue.valid, message.valid])

  const handleName = (event: any) => {
    const newName = event.target.value

    setName({
      ...name,
      value: newName,
      change: true,
      valid: newName.length >= 3 && name.touch && name.change,
    })
  }

  const handleEmail = (event: any) => {
    const newEmail = event.target.value

    setEmail({
      ...email,
      value: newEmail,
      change: true,
      valid:
        !!newEmail &&
        newEmail.length >= 5 &&
        email.touch &&
        email.change &&
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
          newEmail
        ),
    })
  }

  const handlePhone = (event: any) => {
    const newPhone = event.target.value

    setPhone({
      ...phone,
      value: newPhone,
      change: true,
      valid:
        (!!newPhone && /^\d{10}$/.test(newPhone) && phone.touch && phone.change) ||
        !newPhone,
    })
  }

  const handleIssue = (event: any) => {
    const newIssue = event.target.value

    setIssue({
      ...issue,
      value: newIssue,
      change: true,
      valid: newIssue.length >= 5 && issue.touch && issue.change,
    })
  }

  const handleMessage = (event: any) => {
    const newMessage = event.target.value

    setMessage({
      ...message,
      value: newMessage,
      change: true,
      valid: newMessage.length >= 20 && message.touch && message.change,
    })
  }

  const handleTouchName = () => setName({ ...name, touch: true })
  const handleTouchEmail = () => setEmail({ ...email, touch: true })
  const handleTouchPhone = () => setPhone({ ...phone, touch: true })
  const handleTouchIssue = () => setIssue({ ...issue, touch: true })
  const handleTouchMessage = () => setMessage({ ...message, touch: true })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = new FormData(event.target)

    try {
      await axios.post('https://formsubmit.co/B-LOQ123@proton.me', data)

      setName({ value: '', touch: false, change: false, valid: false })
      setEmail({ value: '', touch: false, change: false, valid: false })
      setPhone({ value: '', touch: false, change: false, valid: true })
      setIssue({ value: '', touch: false, change: false, valid: false })
      setMessage({ value: '', touch: false, change: false, valid: false })

      setDisabled(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container className='my-4'>
      <h2 className='text-center mb-4'>Formulario de Contacto</h2>
      <Form onSubmit={handleSubmit} className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
        <Form.Group controlId='name'>
          <Form.Label>
            Nombre <span>*</span>
          </Form.Label>
          <Form.Control
            required
            type='text'
            minLength={3}
            value={name.value}
            isValid={name.valid}
            onChange={handleName}
            onFocus={handleTouchName}
            title='Introduce tu Nombre'
            placeholder='Introduce tu Nombre'
            isInvalid={!name.value && name.touch && name.change && !name.valid}
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
            value={email.value}
            isValid={email.valid}
            onChange={handleEmail}
            onFocus={handleTouchEmail}
            title='Introduce tu Email'
            placeholder='Introduce tu Email'
            isInvalid={!email.value && email.touch && email.change && !email.valid}
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
            value={phone.value}
            onChange={handlePhone}
            onFocus={handleTouchPhone}
            title='Introduce tu Teléfono'
            placeholder='Introduce tu Teléfono'
            isValid={phone.valid && !!phone.value}
            isInvalid={
              !!phone.value &&
              phone.touch &&
              phone.change &&
              !phone.valid &&
              !/^\d+$/.test(phone.value)
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
            value={issue.value}
            isValid={issue.valid}
            onChange={handleIssue}
            onFocus={handleTouchIssue}
            title='Introduce el Asunto'
            placeholder='Introduce el Asunto (5 caracteres minimo)'
            isInvalid={!issue.value && issue.touch && issue.change && !issue.valid}
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
            value={message.value}
            isValid={message.valid}
            onChange={handleMessage}
            onFocus={handleTouchMessage}
            title='Introduce tu Mensaje'
            placeholder='Introduce tu Mensaje (20 caracteres minimo)'
            isInvalid={
              !message.value && message.touch && message.change && !message.valid
            }
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
