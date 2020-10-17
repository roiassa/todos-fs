import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getTodos } from "../../helpers/todos-api";
import { customStyles } from "../../helpers/customStyles";
import { makeStyles } from "@material-ui/core/styles";
import TodoItem from "../TodoItem/TodoItem";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setLocalLoading(true);
    getTodos(isComplete, setTodoList).then(() => setLocalLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  const classes = makeStyles(customStyles)();

  return (
    <>
      <div className="todo-list-container">
        <div className="top-btns">
          <Button
            onClick={() => isComplete && setIsComplete(false)}
            className={
              !isComplete ? classes.selectedButtons : classes.topButtonsBG
            }
          >
            Todos
          </Button>
          <Button
            onClick={() => !isComplete && setIsComplete(true)}
            className={
              isComplete ? classes.selectedButtons : classes.topButtonsBG
            }
          >
            Completed
          </Button>
        </div>

        {localLoading ? (
          <div className="spinner">
            <CircularProgress />
          </div>
        ) : (
          <List className="todo-list">
            {todoList.map((todo) => {
              return (
                <ListItem button key={todo._id} className="list-item">
                  <TodoItem
                    todo={todo}
                    isComplete={isComplete}
                    setTodoList={setTodoList}
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
      <div className="add-btn">
        <Tooltip title="Add Todo" placement="top">
          <Fab
            color="primary"
            onClick={() => history.push("/new-todo")}
            className={classes.otherButtons}
          >
            <AddIcon fontSize="large" />
          </Fab>
        </Tooltip>
      </div>
    </>
  );
};

export default TodoList;
