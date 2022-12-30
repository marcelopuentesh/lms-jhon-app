import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./sidebar";

function Assistance() {
  return (
    <div className="assistance-row">
      <Sidebar />
      <div className="column-date">Date:</div>
      <div className="column-name">Name:</div>
      <div className="column-course">Course:</div>
      <div className="column-status">Status:</div>
    </div>
  );
}

export default Assistance;
