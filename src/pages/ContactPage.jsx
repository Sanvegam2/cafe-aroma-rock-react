import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    tipo: 'PQRS',
    asunto: '',
    mensaje: '',
  })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('')

    const { nombre, email, asunto, mensaje } = form
    if (!nombre.trim() || !email.trim() || !asunto.trim() || !mensaje.trim()) {
      setStatus('Completa nombre, email, asunto y mensaje.')
      return
    }

    // Mock submit
    setStatus('¡Gracias! Tu PQRS fue enviada correctamente.')
    setForm({ nombre: '', email: '', tipo: 'PQRS', asunto: '', mensaje: '' })
  }

  return (
    <div className="page grunge">
      <header className="topbar py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="brand">
            <Link to="/">CAFÉ AROMA ROCK</Link>
          </div>
          <nav className="nav">
            <Link to="/login" className="me-2">
              Iniciar sesión
            </Link>
            <Link to="/register" className="me-3">
              Crear cuenta
            </Link>
            <Link to="/contactenos">Contáctanos</Link>
          </nav>
        </div>
      </header>

      <main className="container py-4">
        <section className="mb-4">
          <div className="text-center mb-4">
            <h2 className="grunge-title">Contáctenos</h2>
            <p className="subtitle mb-0">Envíanos una PQRS y ubicamos tu visita con el mapa.</p>
          </div>

          <div className="row g-3 align-items-stretch">
            <div className="col-lg-6">
              <div className="contact-form-card card-grunge p-4 h-100">
                <h3 className="grunge-title" style={{ fontSize: '1.6rem' }}>
                  Formulario PQRS
                </h3>
                <p className="subtitle">Responderemos a la brevedad.</p>

                <form onSubmit={handleSubmit} className="mt-3">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      className="form-control input"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      type="text"
                      placeholder="Tu nombre"
                      autoComplete="name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control input"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="tu@email.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <select
                      className="form-select input"
                      name="tipo"
                      value={form.tipo}
                      onChange={handleChange}
                    >
                      <option value="PQRS">PQRS</option>
                      <option value="Petición">Petición</option>
                      <option value="Queja">Queja</option>
                      <option value="Reclamo">Reclamo</option>
                      <option value="Sugerencia">Sugerencia</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Asunto</label>
                    <input
                      className="form-control input"
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      type="text"
                      placeholder="Resumen de tu solicitud"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea
                      className="form-control input"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Cuéntanos en detalle..."
                    />
                  </div>

                  {status ? (
                    <div
                      className={
                        status.startsWith('¡Gracias!')
                          ? 'alert alert-success'
                          : 'alert alert-danger'
                      }
                    >
                      {status}
                    </div>
                  ) : null}

                  <button type="submit" className="btn btn-grunge w-100 py-2">
                    Enviar PQRS
                  </button>

                  <p className="subtitle mt-3 mb-0">
                    *Demo: el envío no se conecta a un backend.
                  </p>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card-grunge p-4 h-100">
                <h3 className="grunge-title" style={{ fontSize: '1.6rem' }}>
                  Ubicación
                </h3>
                <p className="subtitle">Visítanos cuando quieras.</p>

                <div className="map-frame mt-3 mapa-oscuro">
                    
                  <iframe
                    title="Mapa Cafe Aroma Rock"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8743885261865!2d-76.533356!3d3.380857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a10008b9f341%3A0x8876374e878a0762!2sCaf%C3%A9%20Aroma%20Rock!5e0!3m2!1ses!2sco!4v1778566347440!5m2!1ses!2sco"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>

                <div className="mt-3">
                  <div className="badge-grunge rounded-3 p-3">
                    <strong>Horario:</strong> Mar - Sab 3:00p.m. a 10:00 p.m.
                    <br />
                    <br />
                    <strong>Dirección:</strong> Cl. 14 #85c-10, Comuna 17 Barrio Ingenio <br /> <br /> 
                    Cali, Valle del Cauca - Colombia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer text-center">
        © {new Date().getFullYear()} Café Aroma Rock
      </footer>
    </div>
  )
}

