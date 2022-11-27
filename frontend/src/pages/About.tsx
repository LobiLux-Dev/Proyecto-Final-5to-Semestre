import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'B-LOQ - About Us'
  })

  return <h1>About Us</h1>
}

export default About
