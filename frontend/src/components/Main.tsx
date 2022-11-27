import '../styles/Main.css'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
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
  )
}

export default Main
