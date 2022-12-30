import React from "react";
import { Grid } from "@mui/material";
import Courses from "./courses";

export default function ListCourses(props) {
  const { allCourses, deleteCourse } = props;

  console.log(allCourses);

  if (!allCourses || allCourses.length === 0) {
    return (
      <div className="list-course-empty">
        <h2>No hay Cursos</h2>
      </div>
    );
  }
  return (
    <Grid className="list-courses" container spacing={3}>
      {allCourses.map((Courses, index) => (
        <Grid key={index} item xs={4}>
          <Courses
            courses={Courses}
            index={index}
            deleteCourse={deleteCourse}
          />
        </Grid>
      ))}
    </Grid>
  );
}
