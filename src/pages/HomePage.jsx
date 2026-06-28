import heroImg from '../assets/hero.png'
import { Link } from 'react-router-dom'

export default function HomePage() {

  return (
    <div className="page grunge">


      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-card">
              <div className="p-4">
                <div className="hero-grid">
                  <div>
                    {/* <div className="kicker mb-3">Grunge vibes + Bootstrap</div> */}
                    <h1 className="hero-h1"><i>Café Aroma Rock</i></h1>
                    {/* <p className="hero-lead">
                      En Café Aroma Rock brindamos un espacio cómodo y tranquilo en el cual puedes disfrutar de una gran selección de cafés y postres Y un excelente ambiente para charlar con amigos o familia
                    </p> */}
                    <p className="hero-lead">Un espacio donde la buena música se mezcla con el aroma del mejor café. Ven a disfrutar de nuestra selección exclusiva de cafés y postres artesanales en un ambiente relajado, cómodo y tranquilo. El punto de encuentro perfecto para conectar, charlar y compartir grandes momentos con tus amigos o familia. ¡Súbele el volumen a tus sentidos!</p>

                    <div className="hero-actions d-flex gap-3 flex-wrap mt-4">
                      <Link to="/register" className="btn btn-grunge px-4 py-2">
                        Crear cuenta
                      </Link>
                      <Link to="/login" className="btn btn-outline-light px-4 py-2">
                        Iniciar sesión
                      </Link>
                    </div>

                    <div className="row g-3 mt-4">
                      <div className="col-md-6">
                        <div className="badge-grunge rounded-3 p-3 h-100">
                          <strong>Estilo:</strong> oscuro y con acento naranja.
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="badge-grunge rounded-3 p-3 h-100">
                          <strong>⚡ Rutas:</strong> /login y /register listas.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hero-visual">
                    <div className="visual-frame">
                      <img src={heroImg} alt="Hero" />
                    </div>
                    {/* <div className="mt-3 text-center">
                      <span className="badge-grunge rounded-3 p-2">🎸 Listo para rockear</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="grunge-title">Menú</h2>
              <p className="subtitle mb-0">Abre cada producto para ver sus ingredientes</p>
            </div>

            <div className="row g-3">
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">📍</div>
                  <div className="feature-title">Rutas claras</div>
                  <p className="feature-desc">---</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">🧨</div>
                  <div className="feature-title">UI con personalidad</div>
                  <p className="feature-desc">---</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-title">Componentes reutilizables</div>
                  <p className="feature-desc">---</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="grunge-title">Bebidas</h2>
              <p className="subtitle mb-0">Refrescate o prueba nuestra especialidad</p>
            </div>

            <div className="steps">
              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-icon">🔎</div>
                <div className="step-title">Mira la landing</div>
                <p className="subtitle mb-0">Te muestra estilo y rutas disponibles.</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-icon">✍️</div>
                <div className="step-title">Regístrate</div>
                <p className="subtitle mb-0">Crea tu cuenta desde /register.</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <div className="step-icon">⚡</div>
                <div className="step-title">Entra al login</div>
                <p className="subtitle mb-0">Accede desde /login y continúa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="section" style={{ paddingBottom: 26 }}>
          <div className="container">
            <div className="row g-3 align-items-center">
              <div className="col-lg-6">
                <div className="hero-visual">
                  <div className="visual-frame">
                    <img src={heroImg} alt="Beneficios" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card-grunge p-4 h-100">
                  <h2 className="grunge-title">Horarios de apertura:</h2>
                  <p className="subtitle">
                    Te esperamos de Martes a Sábados de 3:00 PM a 10:00 PM.<br />
                    ¡Ven a disfrutar de un buen café y rockear con nosotros!
                  </p>
                  <ul className="benefit-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                  <div className="d-flex gap-3 flex-wrap mt-4">
                    <Link to="/register" className="btn btn-grunge px-4 py-2">
                      Empezar ahora
                    </Link>
                    <Link to="/login" className="btn btn-outline-light px-4 py-2">
                      Ya tengo cuenta
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-block">
              <div className="row g-3 align-items-center">
                <div className="col-md-8">
                  <h2 className="grunge-title mb-2">Listo para sumarte al rock?</h2>
                  <p className="subtitle mb-0">Crea tu cuenta o entra con login.</p>
                </div>
                <div className="col-md-4 text-md-end">
                  <div className="d-flex gap-3 justify-content-md-end flex-wrap">
                    <Link to="/register" className="btn btn-grunge px-4 py-2">
                      Register
                    </Link>
                    <Link to="/login" className="btn btn-outline-light px-4 py-2">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer text-center">© {new Date().getFullYear()} Café Aroma Rock</footer>
    </div>
  )
}

