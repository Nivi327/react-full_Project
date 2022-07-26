import React, { Reducer, useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";
import "./TodoList.css";

interface InitialState {
  todoText: string;
  todoStartTime: string;
  todoEndTime: string;
}

interface Action {
  type: string;
  payload: string;
}

const initialState: InitialState = {
  todoText: "",
  todoStartTime: "",
  todoEndTime: "",
};

const reducer: Reducer<InitialState, Action> = (state, action) => {
  if (action.type === "TODO_TEXT") {
    return {
      ...state,
      todoText: action.payload,
    };
  }
  if (action.type === "START_DATE") {
    return {
      ...state,
      todoStartTime: action.payload,
    };
  }
  if (action.type === "END_DATE") {
    return {
      ...state,
      todoEndTime: action.payload,
    };
  }
  return initialState;
};

const TodoInput = () => {
  const [warn, setWarn] = useState("");
  const [hasWarn, setHasWarn] = useState(false);
  const [todoList, setTodoList] = useState<InitialState[]>([]);
  const [todo, dispatchTodo] = useReducer(reducer, initialState);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem("todo", JSON.stringify(todoList));
    event.preventDefault();
    // from-validation
    if (
      todo.todoText === "" ||
      todo.todoStartTime === "" ||
      todo.todoEndTime === ""
    ) {
      setWarn("Plase fill all the values correctly");
      setHasWarn(true);
      return;
    }
    setTodoList((prevList) => {
      return [...prevList, todo];
    });
    dispatchTodo({ type: "TODO_TEXT", payload: "" });
    dispatchTodo({ type: "START_DATE", payload: "" });
    dispatchTodo({ type: "END_DATE", payload: "" });
    let newTodoList: InitialState[] | null;
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify(todoList));
      return;
    }
    const data = JSON.parse(localStorage.getItem("todo") || "[]");
    newTodoList = [...data, todo];
    localStorage.setItem("todo", JSON.stringify(newTodoList));
  };

  const todoListArray: InitialState[] = JSON.parse(
    localStorage.getItem("todo") || "[]"
  );

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchTodo({ type: "TODO_TEXT", payload: event.currentTarget.value });
  };

  const startTimeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const start_date: string = event.currentTarget.value.toString();
    console.log(start_date);
    dispatchTodo({ type: "START_DATE", payload: start_date });
  };

  const endTimeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const end_date: string = event?.currentTarget.value.toString();
    dispatchTodo({ type: "END_DATE", payload: end_date });
  };

  const clearLocalStorageHandler = () => {
    localStorage.setItem("todo", "[]");
  };

  useEffect(() => {
    let warn_timeout: ReturnType<typeof setTimeout>;
    if (warn !== "") {
      warn_timeout = setTimeout(() => {
        setWarn("");
        setHasWarn(false);
      }, 2000);
    }

    return () => {
      clearTimeout(warn_timeout);
    };
  }, [hasWarn, warn]);

  return (
    <React.Fragment>
      {hasWarn && <p>{warn}</p>}
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          name="todo"
          className="todo"
          onChange={inputChangeHandler}
          value={todo.todoText}
          placeholder="Write Your Todo(Type maximum of 30 characters)"
        />
        <input
          type="datetime-local"
          name="start-datetime"
          className="start-time"
          onChange={startTimeHandler}
          value={todo.todoStartTime}
        />
        <input
          type="datetime-local"
          name="end-datetime"
          className="end-time"
          onChange={endTimeHandler}
          value={todo.todoEndTime}
        />
        <button type="submit" className="AddTodobtn">
          Add Todo
        </button>
        <button onClick={clearLocalStorageHandler}>Clear LocalStorage</button>
      </form>
      <TodoList todoList={todoListArray} />
    </React.Fragment>
  );
};

export default TodoInput;
