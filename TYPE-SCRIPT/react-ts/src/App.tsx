import "./App.css";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import TodoContextProvider from "./store/todos-context";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
