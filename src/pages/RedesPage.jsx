import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';

export default function RedesPage() {
    return (
        <div className="page grunge">
            <main className="container py-4">
                <section className="mb-4">
                    <div className="text-center mb-4">
                        <h2 className="grunge-title">Redes sociales</h2>
                        <p className="subtitle mb-0">
                            Síguenos en nuestras redes sociales y mantente al tanto de
                            nuestras novedades.
                        </p>
                    </div>

                    <div className="row g-3 align-items-stretch">
                        <div className="col-lg-6">
                            <div className="card-grunge p-4 h-100">
                                <h3 className="grunge-title" style={{ fontSize: "1.6rem" }}>
                                    TIKTOK
                                </h3>
                                <div className="social-card">
                                    <TikTokEmbed url="https://www.tiktok.com/@cafearomarock_/video/7619503887174700304" />

                                    <div className="d-flex gap-3 flex-wrap mt-4">
                                        <a
                                            href="https://www.tiktok.com/@cafearomarock_"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-grunge px-4 py-2"
                                        >
                                            Visitar Tiktok
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card-grunge p-4 h-100">
                                <h3 className="grunge-title" style={{ fontSize: "1.6rem" }}>
                                    INSTAGRAM
                                </h3>
                                <div className="social-card">
                                    <InstagramEmbed url="https://www.instagram.com/p/DTYsNwgElor/" />
                                  
                                    <div className="d-flex gap-3 flex-wrap mt-4">
                                        <a
                                            href="https://www.instagram.com/cafearomarock"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-grunge px-4 py-2"
                                        >
                                            Visitar Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
