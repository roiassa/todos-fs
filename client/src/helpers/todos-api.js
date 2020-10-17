import axios from "axios";

const url = `/api/todos`;

export const getTodos = async (isComplete, callBack) => {
  try {
    const res = await axios.get(`${url}/${isComplete}`);
    callBack(res.data);
  } catch (err) {
    console.log(err.response);
  }
};

export const addTodo = async (newTodo) => {
  try {
    await axios.post(`${url}`, { title: newTodo });
  } catch (err) {
    console.log(err.response);
  }
};

export const toggleCompleteOfTodo = async (todoId, isComplete) => {
  try {
    await axios.put(`${url}/${todoId}`, { isComplete });
  } catch (err) {
    console.log(err.response);
  }
};

export const removeTodo = async (todoId) => {
  try {
    await axios.delete(`${url}/${todoId}`);
  } catch (err) {
    console.log(err.response);
  }
};
