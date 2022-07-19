import React from "react";

const TodoItem: React.FC<{ text: string; removeItem: () => void }> = (
  props
) => {
  return <li onClick={props.removeItem}>{props.text}</li>;
};

export default TodoItem;
