import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

function Login(){
  return(
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <h1 className="mt-5"><strong>FreeBuy</strong></h1>
            <h6>Plataforma de compra de componentes para computadores, aquí podras encontrar todo lo que necesites para tu PC gamer</h6>
          </div>
          <div className="col-md-4">
            <div className="card">
            <div className="card-header">
                <h4 className="text-center">FreeBuy</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="titulo" placeholder="Ingrese los datos"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="imagen" placeholder="Ingrese los datos"/>
                  </div>                  
                  <button type="submit" className="form-control btn btn-success">Iniciar Sesión</button>
                </form>                   
                </div>
                <div className="card-footer">
                  <button type="button" className="btn btn-primary form-control" data-bs-toggle="modal" data-bs-target="#myModal">
                    Crear una cuenta
                  </button>
            </div>
            </div>                      
          </div>
        </div>
      </div>

      {/*Modal*/}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Regristrate</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="row g-3 needs-validation">
              <div className="mb-3">
                <label  className="form-label">Nombres y Apellidos</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="Nombres y Apellidos"/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="mb-3">
                <label  className="form-label">Número de documento</label>
                <input type="number" className="form-control" id="validationCustom02" placeholder="Número de documento"/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="mb-3">
                <label  className="form-label">Correo electronico</label>
                <input type="email" className="form-control" id="validationCustom02" placeholder="Correo electronico"/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="mb-3">
                <label  className="form-label">Contraseña</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder="Contraseña"/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>              
              <div className="col-12">
                <button className="btn btn-success form-control" type="submit">Registrarse</button>
              </div>
            </form>
            </div>            
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login;