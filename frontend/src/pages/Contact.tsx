import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    document.title = 'B-LOQ - Contact Us'
  })

  return <h1>Contact Us</h1>
}

export default Contact


// // import axios from 'axios'
// import '../styles/pages/Contact.css'
// import { useEffect, useState } from 'react'
// import { Button, Container, Form,
//   //  Modal
//    } from 'react-bootstrap'

// const Contact = () => {
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')
//   const [email, setEmail] = useState('')
//   const [issue, setIssue] = useState('')
//   const [message, setMessage] = useState('')
//   const [disabled, setDisabled] = useState(true)
//   // const [showModal, setShowModal] = useState(false)
//   const [touchName, setTouchName] = useState(false)
//   const [touchEmail, setTouchEmail] = useState(false)
//   const [touchPhone, setTouchPhone] = useState(false)
//   const [touchIssue, setTouchIssue] = useState(false)
//   const [changeName, setChangeName] = useState(false)
//   const [changeEmail, setChangeEmail] = useState(false)
//   const [changePhone, setChangePhone] = useState(false)
//   const [changeIssue, setChangeIssue] = useState(false)
//   const [touchMessage, setTouchMessage] = useState(false)
//   const [changeMessage, setChangeMessage] = useState(false)
//   const [phoneValidated, setPhoneValidated] = useState(true)
//   const [emailValidated, setEmailValidated] = useState(false)
//   const [issueValidated, setIssueValidated] = useState(false)
//   const [messageValidated, setMessageValidated] = useState(false)

//   useEffect(() => {
//     document.title = 'B-LOQ - Contacto'

//     if (
//       name &&
//       email &&
//       issue &&
//       message &&
//       emailValidated &&
//       phoneValidated &&
//       issueValidated &&
//       messageValidated
//     )
//       setDisabled(false)
//     else setDisabled(true)
//   }, [
//     name,
//     email,
//     issue,
//     message,
//     emailValidated,
//     phoneValidated,
//     issueValidated,
//     messageValidated,
//   ])

//   const validateNumber = (event: any) =>
//     ![
//       ...'1234567890'.split(''),
//       'Backspace',
//       'Home',
//       'End',
//       'Delete',
//       'ArrowLeft',
//       'ArrowRight',
//       'ArrowUp',
//       'ArrowDown',
//       'Enter',
//       'Tab',
//     ].includes(event.key) ||
//     (event.target.value.length >= 10 &&
//       ![
//         'Backspace',
//         'Home',
//         'End',
//         'Delete',
//         'ArrowLeft',
//         'ArrowRight',
//         'ArrowUp',
//         'ArrowDown',
//         'Enter',
//         'Tab',
//       ].includes(event.key))
//       ? event.preventDefault()
//       : event

//   const handleTouchName = () => setTouchName(true)
//   const handleTouchEmail = () => setTouchEmail(true)
//   const handleTouchPhone = () => setTouchPhone(true)
//   const handleTouchIssue = () => setTouchIssue(true)
//   const handleTouchMessage = () => setTouchMessage(true)

//   const handleName = (event: any) => {
//     setName(event.target.value)
//     setChangeName(true)
//   }

//   const handleEmail = (event: any) => {
//     setEmail(event.target.value)
//     setChangeEmail(true)

//     const emailRegex =
//       /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

//     if (emailRegex.test(event.target.value)) setEmailValidated(true)
//     else setEmailValidated(false)
//   }

//   const handlePhone = (event: any) => {
//     setPhone(event.target.value)

//     if (event.target.value.length === 0) setChangePhone(false)
//     else setChangePhone(true)

//     if (event.target.value.length === 10 || event.target.value.length === 0)
//       setPhoneValidated(true)
//     else setPhoneValidated(false)
//   }

//   const handleIssue = (event: any) => {
//     setIssue(event.target.value)
//     setChangeIssue(true)

//     if (event.target.value.length >= 5) setIssueValidated(true)
//     else setIssueValidated(false)
//   }

//   const handleMessage = (event: any) => {
//     setMessage(event.target.value)
//     setChangeMessage(true)

//     if (event.target.value.length >= 20) setMessageValidated(true)
//     else setMessageValidated(false)
//   }

//   // const handleCloseModal = () => setShowModal(false)

//   const handleSubmit = async (event: any) => {
//     event.preventDefault()

//     try {
//       // const response = await axios.post(
//       //   'https://formsubmit.co/B-LOQ123@proton.me'
//       // )
//       // console.log(response)
//       // alert('Datos enviados')

//       // setShowModal(true)

//       setName('')
//       setPhone('')
//       setEmail('')
//       setIssue('')
//       setMessage('')
//       setDisabled(true)
//       setTouchName(false)
//       setTouchEmail(false)
//       setTouchPhone(false)
//       setTouchIssue(false)
//       setChangeName(false)
//       setChangeEmail(false)
//       setChangePhone(false)
//       setChangeIssue(false)
//       setTouchMessage(false)
//       setChangeMessage(false)
//       setPhoneValidated(true)
//       setEmailValidated(false)
//       setIssueValidated(false)
//       setMessageValidated(false)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <Container className='my-4'>
//       <h2 className='text-center mb-4'>Formulario de Contacto</h2>
//       <Form
//         onSubmit={handleSubmit}
//         className='col-xl-4 col-lg-5 col-md-6 col-sm-8'
//       >
//         <Form.Group controlId='name'>
//           <Form.Label>
//             Nombre <span>*</span>
//           </Form.Label>
//           <Form.Control
//             required
//             type='text'
//             value={name}
//             onChange={handleName}
//             onFocus={handleTouchName}
//             title='Introduce tu Nombre'
//             placeholder='Introduce tu Nombre'
//             isValid={name.length >= 3 && changeName}
//             isInvalid={!name && touchName && changeName}
//           />
//           <Form.Control.Feedback type='invalid'>
//             Este campo es obligatorio
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group controlId='email'>
//           <Form.Label>
//             Email <span>*</span>
//           </Form.Label>
//           <Form.Control
//             required
//             type='email'
//             value={email}
//             onChange={handleEmail}
//             onFocus={handleTouchEmail}
//             title='Introduce tu Email'
//             placeholder='Introduce tu Email'
//             isInvalid={!email && touchEmail && changeEmail}
//             isValid={!!email && changeEmail && emailValidated}
//           />
//           <Form.Control.Feedback type='invalid'>
//             Este campo es obligatorio y debe ser un email válido
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group controlId='phone'>
//           <Form.Label>Teléfono</Form.Label>
//           <Form.Control
//             type='tel'
//             value={phone}
//             maxLength={10}
//             onChange={handlePhone}
//             onFocus={handleTouchPhone}
//             onKeyDown={validateNumber}
//             title='Introduce tu Teléfono'
//             placeholder='Introduce tu Teléfono'
//             isValid={phone.toString().length === 10 && changePhone}
//             isInvalid={touchPhone && changePhone && phone.length < 10}
//           />
//           <Form.Control.Feedback type='invalid'>
//             Introduce un teléfono válido
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group controlId='issue'>
//           <Form.Label>
//             Asunto <span>*</span>
//           </Form.Label>
//           <Form.Control
//             required
//             type='text'
//             minLength={5}
//             value={issue}
//             onChange={handleIssue}
//             onFocus={handleTouchIssue}
//             title='Introduce el Asunto'
//             isValid={issue.length >= 5 && changeIssue}
//             isInvalid={!issue && touchIssue && changeIssue}
//             placeholder='Introduce el Asunto (5 caracteres minimo)'
//           />
//           <Form.Control.Feedback type='invalid'>
//             Este campo es obligatorio
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group controlId='message'>
//           <Form.Label>
//             Mensaje <span>*</span>
//           </Form.Label>
//           <Form.Control
//             required
//             as='textarea'
//             minLength={20}
//             value={message}
//             onChange={handleMessage}
//             onFocus={handleTouchMessage}
//             title='Introduce tu Mensaje'
//             isValid={message.length >= 20 && changeMessage}
//             isInvalid={!message && touchMessage && changeMessage}
//             placeholder='Introduce tu Mensaje (20 caracteres minimo)'
//           />
//           <Form.Control.Feedback type='invalid'>
//             Este campo es obligatorio
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button variant='primary' type='submit' disabled={disabled}>
//           Enviar
//         </Button>
//         <div>
//           <span>*</span> los campos son obligatorios
//         </div>
//       </Form>
//       {/* <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant='primary' onClick={handleCloseModal}>
//             Cerrar
//           </Button>
//         </Modal.Footer>
//       </Modal> */}
//     </Container>
//   )
// }

// export default Contact
