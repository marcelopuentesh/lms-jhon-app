import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Snackbar } from "@mui/material";
import SendCourse from "./SendCourse";
import ListCourses from "./ListCourses";
import { COURSE_STORAGE } from "./utils/constants";
// import { toast } from "react-toastify";

function Course() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });
  const [allCourses, setAllCourses] = useState([]);

  const [reloadCourses, setReloadCourses] = useState(false);

  useEffect(() => {
    const allCoursesStorage = localStorage.getItem(COURSE_STORAGE);
    const allCoursesArray = JSON.parse(allCoursesStorage);
    setAllCourses(allCoursesArray);
    setReloadCourses(false);
  }, [reloadCourses]);

  const deleteCourse = (index) => {
    allCourses.splice(index, 1);
    localStorage.setItem(COURSE_STORAGE, JSON.stringify(allCourses));
    setReloadCourses(true);
  };
  return (
    <Container className="course-container" maxWidth={false}>
      <SendCourse setToastProps={setToastProps} allCourses={allCourses}>
        <ListCourses allCourses={allCourses} deleteCourse={deleteCourse}>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={toastProps.open}
            autoHideDuration={1000}
            message={<span id="message-id">{toastProps.text}</span>}
          />
        </ListCourses>
      </SendCourse>
    </Container>
  );
}

export default Course;
