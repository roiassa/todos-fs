import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import Tooltip from "@material-ui/core/Tooltip";

const TodoItem = ({ todo, isComplete }) => {
  return (
    <>
      <div className="todo-item-container">
        <>
          <span>{todo.title}</span>
        </>
        <div className="todo-item-btns">
          <Tooltip title="Complete" placement="top">
            <Fab color={isComplete ? "secondary" : "primary"}>
              {isComplete ? <ClearIcon /> : <DoneIcon />}
            </Fab>
          </Tooltip>
          <Tooltip title="Delete" placement="top">
            <Fab color="secondary">
              <DeleteIcon />
            </Fab>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
