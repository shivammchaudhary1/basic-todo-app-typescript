import React, { useEffect, useState } from "react";
import { getTodo } from "../api";
import { Todo } from "../constant";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [change, setChange] = useState<boolean>(false);

  const onAdd = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleChange = () => {
    setChange((pre) => !pre);
  };

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res);
    });
  }, [change]);

  return (
    <div className="todoItem">
      <h1>Todo App Typescript</h1>
      <TodoInput onAdd={onAdd} />
      {todos.length > 0 &&
        todos.map((el) => {
          return <TodoItem key={el.id} {...el} handleChange={handleChange} />;
        })}
    </div>
  );
};

export default TodoApp;
