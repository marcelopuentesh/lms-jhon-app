import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";

// import "./FormSendTweet.scss";

export default function FormSendCourse(props) {
  const { sendCourse } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    course: "",
    date: "",
    checkbox: "checkbox",
    assistance: "",
    lesson: "",
  });

  const onFormChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-send-course">
      <h2 className="form-send-course__form">Enviar Course</h2>
      <form
        onSubmit={(event) => sendCourse(event, formValue)}
        onChange={onFormChange}
        className="form-send-course
__form"
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-course
__form-textarea"
              name="course
"
              multiline
              rows="6"
              placeholder="course
..."
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit-course">Enviar course</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
