import React, {Fragment} from 'react';
import { Link } from "react-router-dom";


function DashboardAdmin() {
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
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Administrar</Link>
                    </li>                
                </ul>
                <Link className="nav-link active" aria-current="page" to="/login">Salir</Link>
                </div>
            </div>
            </nav>
            {/*Contenido*/}
            < div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-center">Ingreso de Productos</h4>
                            </div>
                            <div className="card-body">
                                <form action="http://localhost:5000/api " method="POST">
                                    <div className="mb-3">
                                        <label className="form-label">Titulo del producto</label>
                                        <input type="text" required className="form-control" id="titulo" placeholder="Ingrese los datos"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Ingrese la imagen</label>
                                        <input type="file" required className="form-control" id="imagen" placeholder="Ingrese los datos"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Ingrese la descripcón</label>
                                        <input type="text" required className="form-control" id="descripcion" placeholder="Ingrese los datos"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Ingrese la valor</label>
                                        <input type="number" required className="form-control" id="valor" placeholder="Ingrese los datos"/>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="form-control btn btn-success">Guardar</button>
                                    </div>
                                </form>                   
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <table className="table table-bordered mt-5">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Imagen</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a href="" className="btn btn-primary"><i className="fas fa-marker"></i></a>
                                        <a href="" className="btn btn-danger"><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            
                        </tbody>
                    </table>  
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default DashboardAdmin;
