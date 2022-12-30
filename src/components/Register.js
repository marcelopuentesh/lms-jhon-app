import React from "react";

function Register() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Registro</div>
              <div className="card-body">
                <form
                  action="/registro/guardar"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <div className="mb-3">
                    <label for="txtNombreR" className="form-label">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtNombreR"
                      id="txtNombreR"
                      aria-describedby="helpId"
                      placeholder="Escriba su nombre"
                      required="required"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="txtApellidoR" className="form-label">
                      Apellido:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtApellidoR"
                      id="txtApellidoR"
                      aria-describedby="helpId"
                      placeholder="Escriba su apellido"
                      required="required"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="txtCorreoR" className="form-label">
                      Correo electronico:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtCorreoR"
                      id="txtCorreoR"
                      aria-describedby="helpId"
                      placeholder="Escriba su email"
                      required="required"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="txtLocalcomercialR" className="form-label">
                      Contraseña:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtLocalcomercialR"
                      id="txtLocalcomercialR"
                      aria-describedby="helpId"
                      placeholder="Nombre de su local comercial"
                      required="required"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="txtUbicacionR" className="form-label">
                      Confirma contraseña:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtUbicacionR"
                      id="txtUbicacionR"
                      aria-describedby="helpId"
                      placeholder="Escriba la ubicación del local"
                      required="required"
                    />
                  </div>

                  <div className="mb-3" for="txtProductoR">
                    <label className="form-label">Usted es:</label>
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        for="txtProductoR"
                        id="select1"
                      >
                        <option selected>Elija una opción</option>
                        <option value="1">Docente</option>
                        <option value="2">Estudiante</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
