import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../context/authContext'


export default function LoginPage() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    setError('')

    if (
      !email.trim() || 
      !password.trim()
    ) {
      setError('Completa email y contraseña.')
      return
    }
    const userData = {
      email,
      password
    }
    try {
      console.log('Usuario registrado:', userData)

      await loginUser(userData)

      navigate('/')

    } catch (err) {

      setError('Error al iniciar sesión')

      console.error(err)
    }
  }

  return (
    <div className="page grunge">
      <header className="topbar py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="brand"><Link to="/">CAFÉ AROMA ROCK</Link></div>
          <nav className="nav">
            <Link to="/register">Register</Link>
            <Link to="/contactenos">Contáctanos</Link>

          </nav>
        </div>
      </header>

      <main className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card-grunge p-4">
              <h2 className="grunge-title">Iniciar sesión</h2>
              <p className="subtitle">Entra con tus credenciales.</p>

              <form onSubmit={handleSubmit} className="mt-3">
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
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>

                {error ? <div className="alert alert-danger">{error}</div> : null}

                <button type="submit" className="btn btn-grunge w-100 py-2">
                  Entrar
                </button>

                <div className="mt-3 text-center">
                  ¿No tienes cuenta?{' '}
                  <Link to="/register" className="btn-link fw-bold">
                    Regístrate
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

