import { FaReact } from 'react-icons/fa'
import '../styles/components/Footer.css'

const Footer = () => {
  return (
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
  )
}

export default Footer
