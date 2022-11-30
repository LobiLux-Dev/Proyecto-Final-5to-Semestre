import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
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
    <header>
      <Navbar expand='sm'>
        <Container>
          <Navbar.Brand>
            <Link to='/' onClick={handleFocus}>
              <img src={process.env.PUBLIC_URL + 'logo512.png'} alt='logo' /> B-LOQ
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='header-nav' onClick={handleToggle} />
          <Navbar.Collapse>
            <Nav as='ul'>
              <Nav.Item as='li'>
                <Link to='/about' className='nav-link' onClick={handleFocus}>
                  Sobre Nosotros
                </Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Link to='/books' className='nav-link' onClick={handleFocus}>
                  Libros
                </Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Link to='/contact' className='nav-link' onClick={handleFocus}>
                  Contacto
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
