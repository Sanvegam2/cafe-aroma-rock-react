import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Completa nombre, email y contraseña.')
      return
    }

    // Mock
    navigate('/login')
  }

  return (
    <div className="page grunge">
      <header className="topbar py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="brand">☕ Café Aroma Rock</div>
          <nav className="nav">
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <main className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card-grunge p-4">
              <h2 className="grunge-title">Crear cuenta</h2>
              <p className="subtitle">Gratis y listo para rockear.</p>

              <form onSubmit={handleSubmit} className="mt-3">
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    className="form-control input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Tu nombre"
                    autoComplete="name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="tu@email.com"
                    autoComplete="email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    className="form-control input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Crea una contraseña"
                    autoComplete="new-password"
                  />
                </div>

                {error ? <div className="alert alert-danger">{error}</div> : null}

                <button type="submit" className="btn btn-grunge w-100 py-2">
                  Registrarme
                </button>

                <div className="mt-3 text-center">
                  ¿Ya tienes cuenta?{' '}
                  <Link to="/login" className="btn-link fw-bold">
                    Inicia sesión
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer text-center">© {new Date().getFullYear()} Café Aroma Rock</footer>
    </div>
  )
}

