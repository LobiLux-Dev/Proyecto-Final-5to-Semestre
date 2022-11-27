import '../styles/Main.css'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Books from '../pages/Books'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'

const Main = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='books' element={<Books />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
    </main>
  )
}

export default Main
