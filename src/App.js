//Import styles
import "./css/App.css";
import "./css/props.css";

//Screens
import Sidebar from "./screens/sidebar";
import Header from "./screens/header";
import HomePage from "./screens/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import pages
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Adminpage from "./pages/Adminpage";
import Studentpage from "./pages/Studentpage";
import Profilepage from "./pages/Profilepage";
import Assistancepage from "./pages/Assistancepage";

function App() {
  return (
    <div className="App flex">
      <Header />

      {/* <HomePage /> */}

      {/* Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/admin" element={<Adminpage />} />
          <Route path="/dashboard" element={<Studentpage />} />
          <Route path="/profile" element={<Profilepage name="Juan" />} />
          <Route path="/assistance" element={<Assistancepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
