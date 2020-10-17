const {
  addTodo,
  getTodos,
  removeTodo,
  toggleCompleteTodo,
} = require("../services/todos-services");

const addATodo = async (req, res) => {
  try {
    const todo = req.body;
    const newTodo = await addTodo(todo);
    return res.status(200).json(newTodo).end();
  } catch (err) {
    return res.status(500).json(err.message).end();
  }
};

const getTodosList = async (req, res) => {
  try {
    const todosList = await getTodos(req.params.isComplete);
    return res.status(200).json(todosList).end();
  } catch (err) {
    return res.status(500).json(err.message).end();
  }
};

const removeATodo = async (req, res) => {
  try {
    await removeTodo(req.params.todoId);
    return res
      .status(200)
      .json({ message: "Todo successfully removed." })
      .end();
  } catch (err) {
    return res.status(500).json(err.message).end();
  }
};

const toggleCompleteOfTodo = async (req, res) => {
  try {
    const toggledTodo = await toggleCompleteTodo(req.params.todoId, req.body);
    return res.status(200).json(toggledTodo).end();
  } catch (err) {
    return res.status(500).json(err.message).end();
  }
};

module.exports = {
  addATodo,
  getTodosList,
  removeATodo,
  toggleCompleteOfTodo,
};
