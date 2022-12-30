import React, { useState } from "react";
// import Sidebar from "./sidebar";
import moment from "moment";
import Sidebar from "./sidebar";
import Course from "../components/Course";

function HomePage() {
  // CONSTANTES DE CURSOS POPULARES
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title: "English Class #1 (Module 1)",
      tutor: {
        name: "Jhon Ramirez",
        username: "@jhonsio",
        dp: "https://placeimg.com/640/480/tech" + 1,
      },
      duration: "82 min",
      poster: "",
    },
  ]);

  //    LISTA DE CURSOS VARIABLES
  var courseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <a href="#" className="courses rel" key={"popular-course-" + i}>
        <div
          className="block"
          style={{
            background: "url(" + popularCourse[i].poster + ")",
          }}
        ></div>
      </a>
    );
  }

  //    LISTA DE DEPLOY FECHA:
  var dateDeploy = [];
  for (let i = 0; i < dateDeploy.length; i++) {
    dateDeploy.push(
      <a href="#" className="date-deploy rel" key={"date-deploy" + i}>
        <div
          className="deploy-container"
          style={{
            background: "url(" + popularCourse[i].poster + ")",
          }}
        ></div>
      </a>
    );
  }
  //    LISTA DE DEPLOY LISTA ESTUDIANTES
  var studentList = [];
  for (let i = 0; i < studentList.length; i++) {
    studentList.push(
      <a href="#" className="student-list rel" key={"studentList-list-" + i}>
        <div
          className="student-list-deploy"
          style={{
            background: "url(" + studentList[i].poster + ")",
          }}
        ></div>
      </a>
    );
  }
  return (
    <div className="home-page">
      <Sidebar />
      <Course />
      <div className="section rel">
        <h2 className="title s24 fontb">
          Hello teacher Jhon Ramirez{" "}
          <img src="../components/ui/user-icon.png"></img>
        </h2>
        <span className="fontn">It's good to have you back</span>
        <div className="home-time">
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </div>
        0
      </div>

      {/* Place for the BOX of Courses */}

      <div className="section rel b">
        <span className="title s20 fontn">Cursos Programados</span>
        {/* <div className="courses rel flex">
          <div className="course flex">
            <div className="course-items">
              <a href="#">
                <button className="fecha-class">Fecha</button>
              </a>
              <a href="#">
                <button className="asistencia-class">Tomar Asistencia</button>
              </a>
              <a href="#">
                <button className="ingreso-class">JOIN NOW!</button>
              </a>

              <input className="checkbox" type="checkbox"></input>
              <h2>Class #</h2>
              <h3>By Jhon Ramirez</h3>
            </div>
          </div>
        </div> */}
      </div>
      {/* Place for the DEPLOY of the ITEMS */}

      <div className="section-deploy">
        <span className="title s20 fontn">DATE: dd/mm/yy</span>
        <div className="deploy flex">
          <div className="deploy-date flex"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
