import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/nosotros', label: 'Sobre nosotros' },
  { to: '/menu', label: 'Menú' },
  { to: '/contactenos', label: 'contactanos' },
]

export default function NavBar() {
  return (
    <header className="topbar py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="brand">
          <Link to="/">CAFÉ AROMA ROCK</Link>
        </div>

        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

