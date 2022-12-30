import { AddCircleRounded } from "@mui/icons-material";
import { Fab, Modal } from "@mui/material";
import React, { useState } from "react";
import FormSendCourse from "./FormSendCourses";
import { COURSE_STORAGE } from "./utils/constants";
import moment from "moment";

export default function SendCourse(props) {
  const { setToastProps, allCourses } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendCourse = (event, formValue) => {
    event.preventDefault();
    const { name, course, date, checkbox, assistance, lesson } = formValue;
    let allCoursesArray = [];

    if (allCourses) {
      allCoursesArray = allCourses;
    }
    if (!name || !course || !date || !checkbox || !assistance || !lesson) {
      setToastProps({
        open: true,
        text: "Warning, todos los campos son obligatorios",
      });
    } else {
      formValue.time = moment();
      allCoursesArray.push(formValue);
      localStorage.setItem(COURSE_STORAGE, JSON.stringify(allCoursesArray));
      setToastProps({
        open: true,
        text: "Course enviado correctamente.",
      });
      setIsOpenModal(false);
    }
    allCoursesArray = [];
  };

  return (
    <div className="send-course">
      <Fab
        className="send-course__open-form"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddCircleRounded />
      </Fab>
      <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendCourse sendCourse={sendCourse} />
      </Modal>
    </div>
  );
}
