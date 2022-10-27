import React from "react";
import "./todoList.css";
import { ListGroup } from "react-bootstrap";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos }) => {
  function removeTodo(text) {
    setTodos(todos.filter((item) => item != text));
    // filter((element) => predicate)
  }

  return (
    <div className="TodoList">
      <ListGroup className="mb-3 p-0">
        {todos.map((todo) => (
          <ListGroup.Item>
            <Todo text={todo} removeTodo={removeTodo} />
          </ListGroup.Item>
        )) // creates a new array with modified elements
        }
      </ListGroup>
    </div>
  );
};

export default TodoList;
