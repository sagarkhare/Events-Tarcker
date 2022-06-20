import React from "react";
import CourseGoalItem from "../CourseGoalItem/GoalCourseItem";
import "./CourseGoalList.css";

function CourseGoalList(props) {

    const deleteHandler = (data) =>{
        props.getTaskId(data);
    };
  return (
    <ul className="goal-list">
      {props.eventList.map((item) => (
        <CourseGoalItem key={item.id} task={item.task} id={item.id} getTaskID={deleteHandler} />
      ))}
    </ul>
  );
}
export default CourseGoalList;
