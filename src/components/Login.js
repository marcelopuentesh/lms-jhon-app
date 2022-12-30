import React from "react";
import { useNavigate } from "react-router-dom";
import { logotype } from "../components/ui/logotype.png";

import "../css/login.css";

export default function Logintest() {
  const navigate = useNavigate();

  return (
    <div className="login-background">
      <div className="login-container">
        <logotype />
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {/* {% if mensaje %} */}
            <div className="alert alert-danger" role="alert">
              {/* <strong>{{ mensaje }}</strong> */}
            </div>
            {/* {% endif %} */}

            <div className="card">
              <div className="card-header">
                {/* Inicio de sesion Administrador */}
              </div>
              <div className="card-body">
                {/* COMIENZA DEL FORMULARIO DE INGRESO */}
                <form action="/admin/login" method="post">
                  <div className="mb-3">
                    <label for="txtUsuario" className="form-label">
                      User
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtUsuario"
                      id="txtUsuario"
                      aria-describedby="helpId"
                      placeholder="E-mail"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="txtPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      id="txtPassword"
                      aria-describedby="helpId"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={() => {
                        navigate("/admin");
                      }}
                    >
                      Ingresar
                    </button>
                  </div>
                  <div className="my-3">
                    <span>
                      Desea registrarse? <a href="/register">Registrarse</a>
                    </span>
                  </div>
                </form>
                {/* FINALIZA DEL FORMULARIO DE INGRESO */}
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
