import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="header-wrap">
              <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
                <div class="container">
                  <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                      <span class="icon-menu"></span>
                      <span class="icon-menu"></span>
                      <span class="icon-menu"></span>
                    </button>
                    <a href="index.html" class="navbar-brand"><img src="assets/img/logo.png" alt=""></img></a>
                  </div>
                  <div class="collapse navbar-collapse" id="main-navbar">
                    <ul class="navbar-nav mr-auto w-100 justify-content-end">
                      <li class="nav-item active">
                        <a class="nav-link" href="#header-wrap">
                          Inicio
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#peliculas">
                          Películas
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#series">
                          Series
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#juegos">
                          Juegos
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
        
                <ul class="mobile-menu">
                  <li>
                    <a class="page-scrool" href="#header-wrap">Inicio</a>
                  </li>
                  <li>
                    <a class="page-scrool" href="#peliculas">Películas</a>
                  </li>
                  <li>
                     <a class="page-scroll" href="#series">Series</a>
                  </li>
                  <li>
                    <a class="page-scroll" href="#juegos">Juegos</a>
                 </li>
                 </ul>
        
              </nav>
        
              <div id="main-slide" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#main-slide" data-slide-to="0" class="active"></li>
                  <li data-target="#main-slide" data-slide-to="1"></li>
                  <li data-target="#main-slide" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide"></img>
                    <div class="carousel-caption d-md-block">
                      <p class="fadeInUp wow" data-wow-delay=".6s">Estrenos en alta definición y con descarga rápida y segura.</p>
                      <h1 class="wow fadeInDown heading" data-wow-delay=".4s">Las Mejores Películas</h1>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Second slide"></img>
                    <div class="carousel-caption d-md-block">
                      <p class="fadeInUp wow" data-wow-delay=".6s">Series en alta definición y con descarga rápida y segura.</p>
                      <h1 class="wow bounceIn heading" data-wow-delay=".7s">Las mejores Series</h1>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide"></img>
                    <div class="carousel-caption d-md-block">
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p class="fadeInUp wow" data-wow-delay=".6s">Juegos para pc completos con sus activadores.</p>
                      <h1 class="wow fadeInUp heading" data-wow-delay=".6s">Los mejores juegos</h1>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
                  <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-left"></i></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#main-slide" role="button" data-slide="next">
                  <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-right"></i></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        
            </header>
        
        )
    }
}

export default Header;