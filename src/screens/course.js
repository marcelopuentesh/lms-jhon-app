import React, { useState } from "react";

function coursePage() {
  // CONSTANTES DE CURSOS POPULARES
  const [course, setCourse] = useState([
    {
      ID: 1,
      title: "English Class #1 (Module 1)",
      tutor: {
        name: "TEACHER",

        dp: "https://placeimg.com/640/480/tech" + 1,
      },
      duration: "",
      poster: "",
    },
  ]);

  //    LISTA DE CURSOS VARIABLES
  var courseVideos = [];
  for (let i = 0; i < courseVideos.length; i++) {
    courseList.push(
      <a href="#" className="courses rel" key={"popular-course-" + i}>
        <div
          className="block"
          style={{
            background: "url(" + courseVideos[i].poster + ")",
          }}
        ></div>
      </a>
    );
  }
}
return (
  <div className="home-page">
    <div className="section rel">
      <h2 className="title s24 fontb">
        Hello teacher $NAME <img src="../components/ui/user-icon.png"></img>
      </h2>
      <span className="fontn">It's good to have you back</span>
      <div className="tutors rel flex"></div>
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

export default HomePage;
