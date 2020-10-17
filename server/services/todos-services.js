const { Todo } = require("../models/todos");

function addTodo(todo) {
  todo = new Todo(todo);
  return todo.save();
}

function getTodos(isComplete) {
  return Todo.find({ isComplete: isComplete });
}

function removeTodo(todoId) {
  return Todo.findOneAndRemove({ _id: todoId });
}

function toggleCompleteTodo(todoId, newComplete) {
  return Todo.findOneAndUpdate({ _id: todoId }, newComplete, { new: true });
}

module.exports = {
  addTodo,
  getTodos,
  removeTodo,
  toggleCompleteTodo,
};
