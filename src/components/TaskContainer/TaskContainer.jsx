import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../../store/AppContext";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import "./TaskContainer.scss";

const TaskContainer = () => {
  const state = useContext(AppContext);

  const loadTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const tasks = response.data.slice(0, 5);
      console.log(tasks);
      state.setTasks(tasks);
    } catch (error) {}
  };

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <div className="taskContainer">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskContainer;
