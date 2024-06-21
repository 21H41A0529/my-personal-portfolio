import {Link} from 'react-router-dom'
import "./index.css"

const Header=()=> (
  <nav className='header'>
    <div>
    <h1 className='logoTitle'>Lakshmi Kumpatla</h1>
    </div>
    <ul className='sections'>
        
        <li>
            <Link to="/" className="element">
            Home
            </Link>
        </li>
        <li>
            <Link to="/about" className="element">
            About
            </Link>
        </li>
        <li>
            <Link to="/education" className="element">
            Education
            </Link>
        </li>
        <li>
            <Link to="/projects" className="element">
            Projects
            </Link>
        </li>
        <li>
            <Link to="/skills" className="element">
            Skills
            </Link>
        </li>
        <li>
            <Link to="/resume" className="element">
            Resume
            </Link>
        </li>
        <li>
            <Link to="/contact" className="element">
            Contact
            </Link>
        </li>
        
    </ul>
  </nav>
)

export default Header

