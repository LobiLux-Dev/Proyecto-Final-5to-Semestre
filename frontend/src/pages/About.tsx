import { useEffect } from 'react'
import '../styles/pages/About.css'

const About = () => {
  useEffect(() => {
    document.title = 'B-LOQ - About Us'
  })

  return <video src={process.env.PUBLIC_URL + '/videos/about.mp4'} controls autoPlay muted></video>
}

export default About
