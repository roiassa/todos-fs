import React, { useState } from "react";
import {
  getTodos,
  toggleCompleteOfTodo,
  removeTodo,
} from "../../helpers/todos-api";
import { customStyles } from "../../helpers/customStyles";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

const TodoItem = ({ todo, isComplete, setTodoList }) => {
  const [localLoading, setLocalLoading] = useState(false);

  const handleToggleClick = async () => {
    setLocalLoading(true);
    await toggleCompleteOfTodo(todo._id, !todo.isComplete);
    await getTodos(isComplete, setTodoList);
    setLocalLoading(false);
  };

  const handleRemoveClick = async () => {
    setLocalLoading(true);
    await removeTodo(todo._id);
    await getTodos(isComplete, setTodoList);
    setLocalLoading(false);
  };

  const classes = makeStyles(customStyles)();

  return (
    <>
      {localLoading ? (
        <div className="spinner">
          <CircularProgress />
        </div>
      ) : (
        <div className="todo-item-container" complete={isComplete}>
          <div className="todo-item-title">
            <span className="todo-title">{todo.title}</span>
          </div>
          <div className="todo-item-btns">
            <Tooltip title={isComplete ? "Undo" : "Complete"} placement="top">
              <Fab
                onClick={handleToggleClick}
                size="small"
                className={classes.fabBackGround}
              >
                {isComplete ? (
                  <ClearIcon className={classes.undoIcon} />
                ) : (
                  <DoneIcon className={classes.completeIcon} />
                )}
              </Fab>
            </Tooltip>
            <Tooltip title="Delete" placement="top" onClick={handleRemoveClick}>
              <Fab color="secondary" size="small">
                <DeleteIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
