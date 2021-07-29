import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import "./TaskList.scss";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = () => {
  const state = useContext(AppContext);

  return (
    <div className="taskList">
      {state.tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id}
            completed={task.completed}
            title={task.title}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
