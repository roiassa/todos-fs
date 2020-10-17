import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addTodo } from "../helpers/todos-api";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const NewTodoPage = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [error, setError] = useState("");
  const [maxLength] = useState("25");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoValue) {
      setError("You must insert something!");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      addTodo(newTodoValue);
      history.push("/");
    }
  };

  return (
    <div className="todo-page">
      <form className="new-todo-container" onSubmit={handleSubmit}>
        <div className="new-todo-title">
          <h1>New Todo</h1>
        </div>
        <div className="new-todo-field">
          <TextField
            label="Todo Title"
            placeholder="Insert Todo Title..."
            inputProps={{ maxlength: maxLength }}
            helperText={`Only ${maxLength} characters allowed.`}
            onChange={(e) => {
              setNewTodoValue(e.target.value);
            }}
          />
        </div>
        <div className="bottom-container">
          <div className="error">{error && error}</div>
          <div className="new-todo-btns">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => history.push("/")}
            >
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodoPage;
