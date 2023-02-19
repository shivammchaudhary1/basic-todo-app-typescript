import React, { useState } from "react";
import { addTodo } from "../api";
import { Todo } from "../constant";

type TodoInputPropType = {
  onAdd: (a: Todo) => void;
};

const TodoInput = ({ onAdd }: TodoInputPropType) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Post Request
    addTodo(title).then((res: Todo) => {
      onAdd(res);
    });
    setTitle("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="inputDiv">
      <form onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Add Todo Here"
        />
        <button className="button-21" role="button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

// e --- > onSubmit
// e === > onChange
// e ----> onClick
