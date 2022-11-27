import './App.css'
import { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { Container, Nav, Navbar } from 'react-bootstrap'

const App = () => {
  const [expanded, setExpanded] = useState(false)

  const handleFocus = (event: any) =>
    setTimeout(() => {
      if (expanded) {
        ;(document.querySelector('button.navbar-toggler') as HTMLElement).click()
        setExpanded(false)
      }

      event.target.blur()
    }, 250)

  const handleToggle = () => setExpanded(!expanded)

  return (
    <>
      <header>
        <Navbar expand='sm'>
          <Container>
            <Navbar.Brand>
              <Navbar.Brand href='/'>
                <img src={process.env.PUBLIC_URL + 'logo512.png'} alt='logo' /> B-LOQ
              </Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='header-nav' onClick={handleToggle} />
            <Navbar.Collapse id='header-nav'>
              <Nav as='ul'>
                <Nav.Item as='li'>
                  <Nav.Link href='/about' onClick={handleFocus}>
                    Sobre Nosotros
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='/books' onClick={handleFocus}>
                    Libros
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link href='/contact' onClick={handleFocus}>
                    Contacto
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main></main>
      <footer>
        <div>
          <h5>
            Made with <FaReact title='React JS/TS' id='react-icon' /> by:
          </h5>
          <ul>
            <li>Omar Reynoso Arellano</li>
            <li>José Luis Sánchez Vázquez</li>
            <li>Quetzalli Marel Hernández Alba</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
