import React, { useContext, useRef } from "react";

import { TodosContext } from "./../store/todos-context";

const NewTodo: React.FC = (props) => {
  const todoref = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodosContext);

  const fromSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = todoref.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }

    todoCtx.addNewTodos(enteredValue);
  };

  return (
    <form onSubmit={fromSubmitHandler}>
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" ref={todoref} />
      <button>Add to List</button>
    </form>
  );
};

export default NewTodo;
