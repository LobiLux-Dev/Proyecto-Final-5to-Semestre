import '../styles/components/Main.css'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Books from '../pages/Books'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='books' element={<Books />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default Main
