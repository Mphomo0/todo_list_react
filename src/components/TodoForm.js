import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState(''); // Creating state for the input text
  const dispatch = useDispatch(); // Creating a dispatch function to dispatch Redux actions

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() !== '') { // Checking if the text is not empty or only whitespace
      dispatch(addTodo(text)); // Dispatching addTodo action with the text as payload
      setText(''); // Clearing the input text
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} /> {/* Input field to enter the task text */}
      <button type="submit">Add Task</button> {/* Button to submit the form */}
    </form>
  );
};

export default TodoForm;