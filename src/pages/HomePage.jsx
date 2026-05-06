import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="page grunge">
      <header className="topbar py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="brand">☕ Café Aroma Rock</div>
          <nav className="nav">
            <Link to="/login" className="me-2">
              Login
            </Link>
            <Link to="/register">
              Register
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-4">
        <div className="card-grunge p-4">
          <h1 className="grunge-title mb-2">Bienvenido, rockero</h1>
          <p className="subtitle mb-4">
            Grunge vibes + Bootstrap. Entra para ver las páginas de login y
            registro.
          </p>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="badge-grunge rounded-3 p-3">
                <strong>☠️ Estilo:</strong> sucio, oscuro y con acento naranja.
              </div>
            </div>
            <div className="col-md-6">
              <div className="badge-grunge rounded-3 p-3">
                <strong>⚡ Rutas:</strong> /login y /register listas.
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 flex-wrap mt-4">
            <Link to="/register" className="btn btn-grunge px-4 py-2">
              Crear cuenta
            </Link>
            <Link to="/login" className="btn btn-outline-light px-4 py-2">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer text-center">© {new Date().getFullYear()} Café Aroma Rock</footer>
    </div>
  )
}

