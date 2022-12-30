import React from "react";
import { Card } from "@mui/material";
import { DeleteTwoTone } from "@mui/icons-material";
import CardContent from "@mui/material/CardContent";
import moment from "moment/moment";

export default function Courses(props) {
  const {
    course: { name, time, course, date, checkbox, assistance, lesson },
    index,
    deleteCourses,
  } = props;

  return (
    <Card className="course">
      <CardContent>
        <div className="course-header">
          <h5>{name}</h5>
          <DeleteTwoTone onClick={() => deleteCourses(index)} />
        </div>
        <div className="course-data">
          <ul>
            <li>{course}</li>
            <li>{date}</li>
            <li>{checkbox}</li>
            <li>{assistance}</li>
            <li>{lesson}</li>
          </ul>
        </div>
        <div className="course__date-add-course">
          {moment(time).format("DD/MM/YY HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
}
