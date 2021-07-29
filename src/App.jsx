import React from "react";
import { AppContextWrapper } from "./store/AppContext";
import TaskContainer from "./components/TaskContainer/TaskContainer";

//const App = () => {
//  return <p>Hello world!</p>;
//};

function App() {
  return (
    <AppContextWrapper>
      <TaskContainer />
    </AppContextWrapper>
  );
}

export default App;
