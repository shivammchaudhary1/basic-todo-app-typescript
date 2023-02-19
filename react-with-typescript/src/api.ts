import axios, { AxiosResponse } from "axios";
import { Todo } from "./constant";

//Get Request

export const getTodo = async () => {
  let res: AxiosResponse<Todo[]> = await axios.get(
    `http://localhost:8080/todos`
  );
  return res.data;
};

//we have to pass object lke this = {
//     id:1,
//     title:"eat",
//     status:false
// }
// POST request
export const addTodo = async (title: string) => {
  let res: AxiosResponse<Todo> = await axios.post(
    `http://localhost:8080/todos`,
    {
      title,
      status: false,
    }
  );
  console.log(res.data);
  return res.data;
};

//PATCh Request

export const toggleTodo = async (id: number) => {
  let todoStatus = await axios.get(`http://localhost:8080/todos/${id}`);
  // console.log(todoStatus.data);
  let newObj = { status: !todoStatus.data.status };

  let res = await axios.patch(`http://localhost:8080/todos/${id}`, newObj);
};

// DELETE REQUEST

export const deleteTodo = async (id: number) => {
  let deltodo = axios.delete(`http://localhost:8080/todos/${id}`);
};
