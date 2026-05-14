import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setCelular] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Completa todos los campos.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    // Mock
    navigate('/login')
  }

  return (
    <div className="page grunge">
      <header className="topbar py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="brand"><Link to="/">CAFÉ AROMA ROCK</Link></div>
          <nav className="nav">
            <Link to="/login">Login</Link>
            <Link to="/contactenos">Contactenos</Link>
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
                  <label className="form-label">Nombres</label>
                  <input
                    className="form-control input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="Tus nombres"
                    autoComplete="firstname"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Apellidos</label>
                  <input
                    className="form-control input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Tus apellidos"
                    autoComplete="lastname"
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
                  <label className="form-label">Número de Celular</label>
                  <input 
                    className="form-control input"
                    value={phone}
                    onChange={(e) => setCelular(e.target.value)}
                    type="text"
                    placeholder="Tu número de celular"
                    autoComplete="tel" />
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

                <div className="mb-3">
                  <label className="form-label">Confirmar contraseña</label>
                  <input
                    className="form-control input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirma tu contraseña"
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

