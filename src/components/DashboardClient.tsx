import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

function DashboardClient() {
    return(
        <Fragment>
        {/*Navbar*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">FreeBuy</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="#">Procesadores</Link></li>
                    <li><Link className="dropdown-item" to="#">Placas madre</Link></li>
                    <li><Link className="dropdown-item" to="#">Targetas graficas</Link></li>
                    <li><Link className="dropdown-item" to="#">Discos duros y ssd</Link></li>
                    <li><Link className="dropdown-item" to="#">Memorias ram</Link></li>
                    <li><Link className="dropdown-item" to="#">Funetes de poder</Link></li>
                    <li><Link className="dropdown-item" to="#">Chasis</Link></li>
                    <li><Link className="dropdown-item" to="#">Monitores</Link></li>
                    <li><Link className="dropdown-item" to="#">Perisfericos</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="#">Equipos ensamblados</Link></li>
                </ul>
                </li>
            </ul>
            <Link className="nav-link active" aria-current="page" to="/login">Ingresar</Link>
            </div>
        </div>
        </nav>
        {/*Carrusel*/}
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="imagen1.jpg" width="100%" height="500px" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="imagen2.jpg" width="100%" height="500px" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="imagen3.jpg" width="100%" height="500px" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>      

        </div>
        </div>
        </div>
        </div>
        <h2 className="center">Productos</h2>


        </Fragment>
    )
}

export default DashboardClient;
