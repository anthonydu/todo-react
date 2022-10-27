import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import TodoList from './Components/TodoList/TodoList';
import { useState } from 'react';
// default export must not use curly braces
// named export must use curly braces


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="body">
        <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
      </div>
    </div>
  );
}

export default App;
