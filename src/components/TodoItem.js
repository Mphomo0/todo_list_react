import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa'; // Importing icons from react-icons library
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux library
import { deleteTodo, editTodo, toggleComplete } from '../store/todoSlice'; // Importing Redux action creators from the todoSlice file

const TodoItem = ({ todo, children }) => {
    const dispatch = useDispatch(); // Creating a dispatch function to dispatch Redux actions
  
    const handleDelete = () => {
      dispatch(deleteTodo(todo.id)); // Dispatching deleteTodo action with the todo id
    };
  
    const handleEdit = () => {
      const newText = prompt('Edit task', todo.text); // Prompting user to enter a new text for editing the task
      if (newText && newText.trim() !== '') { // Checking if a valid new text is entered
        dispatch(editTodo({ id: todo.id, text: newText })); // Dispatching editTodo action with the updated todo id and text
      }
    };
  
    const handleComplete = () => {
      dispatch(toggleComplete({ id: todo.id, completed: !todo.completed })); // Dispatching toggleComplete action with the todo id and updated completed status
    };

    return (
    <li>
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span> {/* Rendering the todo text with a class based on completed status */}
      <div className="actions">
        {children}
        <button onClick={handleEdit}>
          <FaEdit /> {/* Render the edit icon */}
        </button>
        <button onClick={handleDelete}>
          <FaTrash /> {/* Render the trash icon */}
        </button>
        <button onClick={handleComplete}>
          <FaCheck /> {/* Render the check icon */}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;