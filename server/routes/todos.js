const express = require("express");
const router = express.Router();
const {
  addATodo,
  getTodosList,
  removeATodo,
  toggleCompleteOfTodo,
} = require("../controllers/todos");

router.get("/todos/:isComplete", getTodosList);
router.post("/todos", addATodo);
router.delete("/todos/:todoId", removeATodo);
router.put("/todos/:todoId", toggleCompleteOfTodo);

module.exports = router;
