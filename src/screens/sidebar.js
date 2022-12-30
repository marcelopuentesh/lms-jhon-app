import React, { useState } from "react";
import horizontalogo from "../components/ui/horizontalogo.png";
// import "../css/sidebar.scss";
// import { ViewStreamIcon } from "@mui/material";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "" },
    { label: "Profile", slug: "/profile", icon: "" },
    {
      label: "Assistance",
      slug: "/Assistance",
      icon: "",
    },
    { label: "My courses", slug: "/my-courses", icon: "" },
    { label: "Logout", slug: "/", icon: "" },
  ]);
  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a href={nav[i].slug} className="link bl noul flex c333">
          <div className={"ico s20" + nav[i].icon} />
          <h2 className="lbl s20">{nav[i].label}</h2>
        </a>
      </li>
    );
  }

  return (
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img src={horizontalogo} className="bl"></img>
      </a>

      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <div className="icon-lamp-bright ico" />
        <div className="lbl s15 fontb c333">
          Updated Courses
          <h2 className="auhor s13">By Marcelo</h2>
        </div>
      </div>
      <div className="stats flex">
        <div className="points flex">
          <div className="ico icon-shield"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
