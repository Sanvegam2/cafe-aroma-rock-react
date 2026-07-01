import aboutImage from '../assets/aboutImage.webp'
import { Link } from 'react-router-dom'

export default function aboutPage() {

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
                    <h1 className="hero-h1"><i>Un cafe con sabor a rock</i></h1>
                    {/* <p className="hero-lead">
                      En Café Aroma Rock brindamos un espacio cómodo y tranquilo en el cual puedes disfrutar de una gran selección de cafés y postres Y un excelente ambiente para charlar con amigos o familia
                    </p> */}
                    <p className="hero-lead">Cafe Aroma Rock nace de la pasión por el café y la música en el año 2025</p>
                  </div>

                  <div className="hero-visual">
                    <div className="visual-frame-about">
                      <img src={aboutImage} alt="About Café Aroma Rock"/>
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

      </main>

      <footer className="footer text-center">© {new Date().getFullYear()} Café Aroma Rock</footer>
    </div>
  )
}

