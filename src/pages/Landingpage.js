import { React } from "react";
import logotype from "../components/ui/logotype.png";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function Landingpage() {
  const navigate = useNavigate();
  return (
    <div className="landingpage">
      <AppBar position="flex">
        <Toolbar>
          {/*Inside the IconButton, we
		can render various icons*/}
          <IconButton
            size="large"
            edge="start"
            asdasdadv
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*This is a simple Menu
			Icon wrapped in Icon */}
            {/* <MenuIcon /> */}
          </IconButton>
          {/* The Typography component applies
		default font weights and sizes */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Othalan Academy
          </Typography>

          {/* Boton para acceder al Login */}

          <button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Acceder
          </button>

          {/* Boton de Registro */}
          <button
            color="inherit"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>

          {/* Same as */}
        </Toolbar>
      </AppBar>

      <div>
        <header className="App-header">
          <img src={logotype} className="App-logo" alt="logo" />
          <p>App in process...</p>

          {/* <RegisterPage /> */}
          <div className="button-social">
            <a
              href="https://www.facebook.com/othalanlanguageacademy?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <button>Facebook</button>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <button>Instagram</button>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <button>TikTok</button>
            </a>
          </div>
        </header>
        <Form />
      </div>
    </div>
  );
}

export default Landingpage;
