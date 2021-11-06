import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header'
import Footer from '../layouts/Footer';

function DashboardClient() {
    return(
        <Fragment>  
        <Header/>    
        <body>
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
            {/*Productos*/}
            <hr/>
            <h1 className="text-center">Productos</h1>
            <div className="row">
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </body>
        
        

        <Footer/>
        </Fragment>
    )
}

export default DashboardClient;
