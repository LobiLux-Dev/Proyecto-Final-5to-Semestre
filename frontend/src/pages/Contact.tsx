import axios from 'axios'
import '../styles/pages/Contact.css'
import { useEffect, useState } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'

const initialValues = {
  value: '',
  touch: false,
  valid: false,
  change: false,
}

const modalValues = {
  body: '',
  title: '',
  show: false,
}

const Contact = () => {
  const [modal, setModal] = useState(modalValues)

  const [name, setName] = useState(initialValues)
  const [email, setEmail] = useState(initialValues)
  const [issue, setIssue] = useState(initialValues)
  const [message, setMessage] = useState(initialValues)
  const [phone, setPhone] = useState({ ...initialValues, valid: true })

  const [disabled, setDisabled] = useState(true)

  const handleModal = () => setModal({ ...modal, show: false })

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
      change: true,
      value: newName,
      valid: newName.length >= 3 && name.touch && name.change,
    })
  }

  const handleEmail = (event: any) => {
    const newEmail = event.target.value

    setEmail({
      ...email,
      change: true,
      value: newEmail,
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
      change: true,
      value: newPhone,
      valid:
        (!!newPhone && /^\d{10}$/.test(newPhone) && phone.touch && phone.change) ||
        !newPhone,
    })
  }

  const handleIssue = (event: any) => {
    const newIssue = event.target.value

    setIssue({
      ...issue,
      change: true,
      value: newIssue,
      valid: newIssue.length >= 5 && issue.touch && issue.change,
    })
  }

  const handleMessage = (event: any) => {
    const newMessage = event.target.value

    setMessage({
      ...message,
      change: true,
      value: newMessage,
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

      setModal({
        show: true,
        title: '✅ Éxito ✅',
        body: 'Formulario enviado correctamente!',
      })

      setName({ value: '', touch: false, valid: false, change: false })
      setPhone({ value: '', touch: false, valid: true, change: false })
      setEmail({ value: '', touch: false, valid: false, change: false })
      setIssue({ value: '', touch: false, valid: false, change: false })
      setMessage({ value: '', touch: false, valid: false, change: false })

      setDisabled(true)
    } catch {
      setModal({
        show: true,
        title: '❌ Error ❌',
        body: 'Error al enviar el formulario!',
      })
    }
  }

  return (
    <Container id='contact-container'>
      <h2>Formulario de Contacto</h2>
      <Form onSubmit={handleSubmit} className='col-xl-4 col-lg-5 col-md-6 col-sm-8'>
        <input type='hidden' name='_captcha' value='false' />
        <Form.Group controlId='name'>
          <Form.Label>
            Nombre <span>*</span>
          </Form.Label>
          <Form.Control
            required
            name='name'
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
            name='email'
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
            name='phone'
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
            name='issue'
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
            name='message'
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
      <Modal show={modal.show} onHide={handleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.body}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleModal}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Contact
