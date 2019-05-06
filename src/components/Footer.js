import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
                            <h3><img src="assets/img/logoo.png" alt=""></img></h3>
                            <p>
                                Desarrollador en progreso y buscando aportarles las mejores películas, series y juegos.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
                            <h3>Link de interes</h3>
                            <ul>
                               <li><a href="#">AdBlock</a></li>
                               <li><a href="#">Descargar sin limites</a></li>
                               <li><a href="#">Proximamente</a></li>
                               <li><a href="#">Actualizaciones</a></li>
                               <li><a href="#">Tutoriales</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
                            <h3>Publicaciones recientes</h3>
                            <ul className="image-list">
                                <li>
                                    <figure className="overlay">
                                        <img className="img-fluid" src="assets/img/art/a1.jpg" alt=""></img>
                                    </figure>
                                        <div className="post-content">
                                            <h6 className="post-title"> <a href="blog-single.html">Lorem ipsm dolor sumit.</a> </h6>
                                            <div className="meta"><span className="date">Fecha</span></div>
                                       </div>
                                </li>
                                <li>
                                    <figure className="overlay">
                                        <img className="img-fluid" src="assets/img/art/a2.jpg" alt=""></img>
                                    </figure>
                                    <div className="post-content">
                                        <h6 className="post-title"><a href="blog-single.html">Lorem ipsm dolor sumit.</a></h6>
                                        <div className="meta"><span className="date">Fecha</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
                            <h3>SUSCRIBETE</h3>
                        <div className="widget">
                        <div className="newsletter-wrapper">
                            <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                                <div className="form-group is-empty">
                                    <input type="email" value="" name="Email" className="form-control" id="EMAIL" placeholder="Tu email" required=""></input>
                                    <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-pointer"></i></button>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                        </div>
                        </div>
                            <div className="widget">
                               <h5 className="widget-title">Siguenos en</h5>
                                <ul className="footer-social">
                                    <li><a className="facebook" href=""><i className="lni-facebook-filled"></i></a></li>
                                    <li><a className="twitter" href="https://www.facebook.com/Hellab302-997789640428126"><i className="lni-twitter-filled"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="lni-linkedin-filled"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;