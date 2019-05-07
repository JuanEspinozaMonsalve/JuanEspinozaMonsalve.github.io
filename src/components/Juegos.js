import React, { Component } from 'react';

class Juegos extends Component {
    render() {
        return (
            <section id="juegos" classNameName="section-padding">
                <div classNameName="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12">
                                <div className="section-title-header text-center">
                                    <h1 class="section-title wow fadeInUp" data-wow-delay="0.2s">Juegos</h1>
                                    <p class="wow fadeInDown color" data-wow-delay="0.2s">Diferentes juegos para PC.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="about-item">
                                    <img className="img-fluid" src="assets/img/about/jf.jpg" alt=""></img>
                                    <div className="about-text">
                                        <h3>Jump Force</h3>
                                        <h4>Clave: Hellab302</h4>
                                        <p>Jump Force es un videojuego de lucha desarrollado por Spike Chunsoft y distribuido por Bandai Namco, para las plataformas PlayStation 4, Xbox One y Microsoft Windows.​ El juego está protagonizado por personajes de mangas publicados en la revista Shōnen Jump. Su fecha de lanzamiento fue el 15 de febrero de 2019.</p>
                                        <a class="btn btn-common btn-rm" href="#">Próximamente</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="about-item">
                                    <img className="img-fluid" src="assets/img/about/re7.jpg" alt=""></img>
                                    <div className="about-text">
                                        <h3>Resident Evil 7</h3>
                                        <h4>Clave: Hellab302</h4>
                                        <p>Resident Evil 7 (estilizado como RESIDENT EVII. biohazard), conocido originalmente en Japón como Biohazard 7: Resident Evil (estilizado como BIOHA7ARD) es un videojuego perteneciente al género del survival horror, desarrollado por la empresa japonesa Capcom, lanzado el 24 de Enero de 2017.</p>
                                        <a class="btn btn-common btn-rm" href="#">Próximamente</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6 col-lg-4">
                                <div className="about-item">
                                    <img className="img-fluid" src="assets/img/about/gta5.jpg" alt=""></img>
                                    <div className="about-text">
                                        <h3>grand theft auto V</h3>
                                        <h4>Clave: Hellab302</h4>
                                        <p>'Grand Theft Auto V' es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013.</p>
                                        <a class="btn btn-common btn-rm" href="#">Próximamente</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>    
            </section>
        )
    }
}

export default Juegos;