import React, { useContext } from "react";

import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul>
      {todoCtx.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            removeItem={todoCtx.removeNewTodos.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
