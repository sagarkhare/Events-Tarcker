import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props) {
  const [inputTask, setInputTask] = useState("");
  const [check, setCheck] = useState(true);

  const changeHandler = (event) => {
    if(event.target.value.trim()) setCheck(true);
    setInputTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    inputTask.trim() !== "" ? props.getInputValue(inputTask) : setCheck(false);
    // props.getInputValue(inputTask);
    setInputTask("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* <div className={check?"form-control":"form-control invalid"}> */}
      <div className={`form-control ${check?'': 'invalid'}`}>
        {/* <label style={{ color: !check ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={changeHandler}
          value={inputTask}
          placeholder="Enter any task..."
          // style={{ borderColor: !check ? "red" : "black" }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
export default CourseInput;
