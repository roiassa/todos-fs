import axios from "axios";

export const getTodos = async (isComplete, callBack) => {
  const url = `/api/todos/${isComplete}`;
  try {
    const res = await axios.get(url);
    callBack(res.data);
  } catch (err) {
    console.log(err.response);
  }
};
