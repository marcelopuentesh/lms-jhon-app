import React, { useState } from "react";
import Sidebar from "../screens/sidebar";

function Profilepage(props) {
  return (
    <div className="profile-container">
      <Sidebar />
      <h1>Perfil</h1>

      <div className="profile-box">
        <div className="profile-data">
          <h2>Información personal:</h2>
          <h4>Nombre: {props.name}</h4>
          <h4>Edad: 21</h4>
          <h4>Nacionalidad: CO</h4>
          <h4>ID: </h4>
          <h4>Tipo de identificación: </h4>
          <h4>Telefono: </h4>
          <h4>Email: </h4>
        </div>
        <div className="profile-pic">
          <h4>profile pic</h4>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
