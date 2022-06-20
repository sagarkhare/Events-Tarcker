import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props) {
  const [inputTask, setInputTask] = useState("");

  const changeHandler = (event) => {
    setInputTask(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    props.getInputValue(inputTask);
    setInputTask("");
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={changeHandler} value={inputTask} placeholder="Enter any task..." />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
}
export default CourseInput;
