import React from "react";
import "./TodoList.css";

interface Todo {
  todoText: string;
  todoStartTime: string;
  todoEndTime: string;
}

const TodoList = (props: { todoList: Todo[] }) => {
  console.log(props.todoList);
  return (
    <ul className="todo-list">
      {props.todoList.map((todo: Todo) => {
        return (
          <React.Fragment>
            <li key={todo.todoStartTime + todo.todoEndTime}>
              <div className="text">{todo.todoText}</div>
              <div className="start-time">{todo.todoStartTime}</div>
              <div className="end-time">{todo.todoEndTime}</div>
            </li>
            <hr className="line" />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default TodoList;
