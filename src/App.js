import React, { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  const initialList = [
    {
      id: 1,
      task: "Do exercise",
    },
    {
      id: 2,
      task: "Go for walk",
    },
  ];
  const [eventList, setEventList] = useState(initialList);

  const addTask = (data) => {
    const idArray = eventList.map((data) => {
      return data.id;
    });
    const maxID = Math.max(...idArray) + 1;
    setEventList((addTask) => [...addTask, { id: maxID, task: data }]);
  };

  const deleteHandler = (idd) => {
    const newList = eventList.filter(element => element.id !== idd);
    setEventList(newList);
  };
  return (
    <div>
    <div id="goal-form">
      <CourseInput getInputValue={addTask} />
      </div>
      <section id="goals">
      {eventList.length > 0 ? (
        <CourseGoalList eventList={eventList} getTaskId={deleteHandler} />
      ) : (
        <p style={{textAlign:"center"}}>No goals found!</p>
      )}
    </section>
    </div>
  );
}
export default App;
