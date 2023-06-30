import './App.css'; // Importing CSS file
import React from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector hook from react-redux library
import TodoForm from './components/TodoForm'; // Importing TodoForm component
import TodoItem from './components/TodoItem'; // Importing TodoItem component

const App = () => {
  const todos = useSelector(state => state.todos); // Using useSelector hook to access the todos state from Redux store

  return (
    <div className="container">
      <h1>Todo App</h1> {/* Render a heading */}
      <TodoForm /> {/* Render TodoForm component */}
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} /> // Render TodoItem component for each todo in the todos array
        ))}
      </ul>
    </div>
  );
};

export default App;