import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header-wrap">
              <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                <div className="container">
                  <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      <span className="icon-menu"></span>
                      <span className="icon-menu"></span>
                      <span className="icon-menu"></span>
                    </button>                    
                  </div>
                  <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                      <li className="nav-item active">
                        <a className="nav-link" href="#header-wrap">
                          Inicio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#peliculas">
                          Películas
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#series">
                          Series
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#juegos">
                          Juegos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
        
                <ul className="mobile-menu">
                  <li>
                    <a className="page-scrool" href="#header-wrap">Inicio</a>
                  </li>
                  <li>
                    <a className="page-scrool" href="#peliculas">Películas</a>
                  </li>
                  <li>
                     <a className="page-scroll" href="#series">Series</a>
                  </li>
                  <li>
                    <a className="page-scroll" href="#juegos">Juegos</a>
                 </li>
                 </ul>
        
              </nav>
        
              <div id="main-slide" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                  <li data-target="#main-slide" data-slide-to="1"></li>
                  <li data-target="#main-slide" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide"></img>
                    <div className="carousel-caption d-md-block">
                      <p className="fadeInUp wow" data-wow-delay=".6s">Estrenos en alta definición y con descarga rápida y segura.</p>
                      <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Las Mejores Películas</h1>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Second slide"></img>
                    <div className="carousel-caption d-md-block">
                      <p className="fadeInUp wow" data-wow-delay=".6s">Series en alta definición y con descarga rápida y segura.</p>
                      <h1 className="wow bounceIn heading" data-wow-delay=".7s">Las mejores Series</h1>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide"></img>
                    <div className="carousel-caption d-md-block">
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p className="fadeInUp wow" data-wow-delay=".6s">Juegos para pc completos con sus activadores.</p>
                      <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Los mejores juegos</h1>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
                  <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
                  <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
        
            </header>
        
        )
    }
}

export default Header;