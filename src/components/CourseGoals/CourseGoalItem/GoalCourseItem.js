import React from "react";
import "./CourseGoalItem.css";

function CourseGoalItem(props){

    const deleteHandler = () =>{
        props.getTaskID(props.id);
    };
    return(
        <div className="goal-item" onClick={deleteHandler}>
            {props.task}
        </div>
    );
};
export default CourseGoalItem;