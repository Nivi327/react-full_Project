import React from "react";
import Todo from "../models/Todo";
import { useState } from "react";

type contextObject = {
  items: Todo[];
  addNewTodos: (value: string) => void;
  removeNewTodos: (id: string) => void;
};

export const TodosContext = React.createContext<contextObject>({
  items: [],
  addNewTodos: (value: string) => {},
  removeNewTodos: (id: string) => {},
});

type ChildProps = {
  children: React.ReactNode;
};

const TodoContextProvider = (props: ChildProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredValue: string) => {
    const newTodo = new Todo(enteredValue);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeItemHandler = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.filter((item: Todo) => item.id !== todoId)
    );
  };

  const contextValue: contextObject = {
    items: todos,
    addNewTodos: addTodoHandler,
    removeNewTodos: removeItemHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
