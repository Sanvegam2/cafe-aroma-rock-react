import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/nosotros", label: "Conócenos" },
  { to: "/contactenos", label: "Ubicación" },
  { to: "/redes", label: "Redes sociales" },
];

export default function NavBar() {
  return (
    <header className="topbar py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="brand">
          <Link to="/">CAFÉ AROMA ROCK</Link>
        </div>

        <nav className="nav">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? "active" : undefined)} >
              {" "}
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
