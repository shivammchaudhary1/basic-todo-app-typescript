import React, { useEffect, useState } from "react";
import { getTodo } from "../api";
import { Todo } from "../constant";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

//type here is the inner structure
// type Todo = {
//   id: number;
//   title: string;
//   status: boolean;
// };

// let dummy = [
//   {
//     id: 1,
//     title: "eat",
//     status: false,
//   },
// ];

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // useState<Object[]> this is outer struture array of object
  const [change, setChange] = useState<boolean>(false);

  const onAdd = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleChange = () => {
    setChange((pre) => !pre);
  };

  useEffect(() => {
    getTodo().then((res) => {
      //   console.log(res);
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
