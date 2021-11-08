import React, {Fragment} from 'react';

function Login(){
  return(
    <Fragment>
      <div className="container mt-5">
        <div className="row">
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
                  <button type="submit" className="form-control btn btn-success">Guardar</button>
                </form>                   
                </div>
                <div className="card-footer">
            </div>
            </div>                      
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login;