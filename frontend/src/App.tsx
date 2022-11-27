import './App.css'
import { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
    <BrowserRouter>
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
      <main>
        <Container>
          <Routes>
            <Route index element={<h1>Home</h1>} />
            <Route path='about' element={<h1>About Us</h1>} />
            <Route path='books' element={<h1>Books</h1>} />
            <Route path='contact' element={<h1>Contact Us</h1>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
          </Routes>
        </Container>
      </main>
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
    </BrowserRouter>
  )
}

export default App
