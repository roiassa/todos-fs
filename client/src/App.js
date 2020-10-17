import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewTodoPage from "./pages/NewTodoPage";
import "./styles/dist/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new-todo" component={NewTodoPage} />
      </div>
    </Router>
  );
}

export default App;
