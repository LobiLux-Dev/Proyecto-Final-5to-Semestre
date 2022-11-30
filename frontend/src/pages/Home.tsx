import '../styles/pages/Home.css'
import { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
  useEffect(() => {
    document.title = 'B-LOQ - Inicio'
  })

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + '/images/slider-1.jpg'}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>B-LOQ</h3>
          <p>Leer es soñar con los ojos abiertos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + '/images/slider-2.jpg'}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>B-LOQ</h3>
          <p>Leer es soñar con los ojos abiertos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + '/images/slider-3.jpg'}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>B-LOQ</h3>
          <p>Leer es soñar con los ojos abiertos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + '/images/slider-4.jpg'}
          alt='Fourth slide'
        />
        <Carousel.Caption>
          <h3>B-LOQ</h3>
          <p>Leer es soñar con los ojos abiertos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={process.env.PUBLIC_URL + '/images/slider-5.jpg'}
          alt='Fifth slide'
        />
        <Carousel.Caption>
          <h3>B-LOQ</h3>
          <p>Leer es soñar con los ojos abiertos.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
