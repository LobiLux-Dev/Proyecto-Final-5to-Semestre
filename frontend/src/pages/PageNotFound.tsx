import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/PageNotFound.css'
import { Container } from 'react-bootstrap'

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'B-LOQ - Página no encontrada'
  })

  return (
    <Container id='pagenotfound-container'>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>
        Has click <Link to='/'>aqui</Link> para volver al inicio
      </p>
    </Container>
  )
}

export default PageNotFound
