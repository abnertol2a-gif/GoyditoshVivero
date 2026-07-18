import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__brand">
        <NavLink to="/" className="brand-link">Vivero Goyditosh</NavLink>
      </div>

      <ul className="navbar__list">
        <li>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/plantas" end className={({isActive}) => isActive ? 'active' : ''}>
            Plantas
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventario" className={({isActive}) => isActive ? 'active' : ''}>
            Inventario
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
