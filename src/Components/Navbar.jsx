import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <header>
        <div className="header-container">
          <h1 className='header-title'>Navbar</h1>
          <ul className='nav-menu'>
            <li>
              <Link to='/' className='nav-items'> Home </Link>
            </li>
            <li>
              <Link to='/contato' className='nav-items'> Contato </Link>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Navbar