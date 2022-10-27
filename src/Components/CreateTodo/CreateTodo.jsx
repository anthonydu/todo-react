import React from "react";
import { useState } from "react";
import "./createTodo.css";
import { Form, Button } from "react-bootstrap";

const CreateTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  // useState(initState) => [currentState, setStateFn]
  const [isInvalid, setIsInvalid] = useState(false);

  function addTodo() {
    if (todos.includes(todo)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      setTodos([...todos, todo]);
    }
  }

  function updateTodo(e) {
    setTodo(e.target.value);
    setIsInvalid(false);
  }

  return (
    <div className="CreateTodo">
      <Form>
        <h1 className="m-3">Create Your Todo</h1>
        <Form.Group className="mb-3 p-0 w-100" xs={12}>
          <Form.Control
            type="text"
            placeholder="Todo Name"
            onChange={updateTodo}
            isInvalid={isInvalid}
          />
          <Form.Control.Feedback type="invalid">Item already in list!</Form.Control.Feedback>
        </Form.Group>
        <Button className="mb-3 w-100" xs={12} onClick={() => addTodo()}>
          Add Todo
        </Button>
      </Form>
    </div>
  );
}

export default CreateTodo;
