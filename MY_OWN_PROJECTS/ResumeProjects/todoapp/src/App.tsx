import React from "react";
import TodoInput from "./components/TodoInput";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <nav>
        <header>Plan Your Todo List</header>
        <input type="text" name="search" className="search" />
      </nav> */}
      <TodoInput />
    </div>
  );
};

export default App;
