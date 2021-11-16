import React from 'react';
import { Link } from "react-router-dom";



function Header() {
    return(
        <header>
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
                    <li><Link className="dropdown-item" to="#Procesadores">Procesadores</Link></li>
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
        </header>
    )
}

export default Header;