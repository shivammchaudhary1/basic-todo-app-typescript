import React from "react";
import { deleteTodo, toggleTodo } from "../api";

import { Todo } from "../constant";

interface TodoItemPropType extends Todo {
  handleChange: () => void;
}

const TodoItem = ({ id, title, status, handleChange }: TodoItemPropType) => {
  const handleToggle = () => {
    toggleTodo(id).then(() => handleChange());
  };

  const handleDelete = () => {
    deleteTodo(id).then(() => handleChange());
  };

  return (
    <div className="todoItemChild">
      <h4>{title}</h4>
      <h4>{status ? "Complete" : "Pending"}</h4>
      <button className="toggleButton" onClick={handleToggle}>
        Toggle
      </button>
      <button className="deleteButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
