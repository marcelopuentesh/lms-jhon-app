import React from "react";
// import logotype from "./logotype.png";
import { Button } from "@mui/material";

function Header() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            {/* <img src={logotype}></img> */}
          </button>
          <Button href="#text-buttons">Inicio</Button>
          <Button
            onClick={() => {
              alert("El acceso se esta desarrollando");
            }}
          >
            Acceder
          </Button>
        </form>
      </nav>
    </div>
  );
}

export default Header;
