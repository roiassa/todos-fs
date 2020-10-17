import React, { useState, useEffect } from "react";
import { getTodos } from "../../helpers/todos-api";
import TodoItem from "../TodoItem/TodoItem";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    getTodos(isComplete, setTodoList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  console.log(todoList);

  return (
    <div className="todo-list">
      <div className="top-btns">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth
        >
          <Button onClick={() => isComplete && setIsComplete(false)}>
            Todos
          </Button>
          <Button onClick={() => !isComplete && setIsComplete(true)}>
            Completed
          </Button>
        </ButtonGroup>
      </div>
      <div className="title">
        <h1>{isComplete ? "Completed Todos List" : "Todo List"}</h1>
      </div>
      {todoList.length > 0 && (
        <List component="nav" aria-label="contacts">
          {todoList.map((todo) => {
            return (
              <ListItem button key={todo._id}>
                <TodoItem todo={todo} isComplete={isComplete} />
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default TodoList;
