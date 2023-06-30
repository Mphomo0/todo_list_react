import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos', // Name of the slice
  initialState: [], // Initial state of the todos array
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), // Generate a unique ID using the current timestamp
        text: action.payload, // Get the text from the action payload
        completed: false, // Set completed status to false by default
      };
      state.push(newTodo); // Add the new todo to the state array
    },
    deleteTodo: (state, action) => {
      const todoIndex = state.findIndex(todo => todo.id === action.payload); // Find the index of the todo to be deleted
      if (todoIndex !== -1) {
        state.splice(todoIndex, 1); // Remove the todo from the state array
      }
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload; // Get the id and updated text from the action payload
      const todo = state.find(todo => todo.id === id); // Find the todo with the specified id
      if (todo) {
        todo.text = text; // Update the todo's text
      }
    },
    toggleComplete: (state, action) => {
      const { id, completed } = action.payload; // Get the id and updated completed status from the action payload
      const todo = state.find(todo => todo.id === id); // Find the todo with the specified id
      if (todo) {
        todo.completed = completed; // Update the todo's completed status
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } = todoSlice.actions; // Exporting the action creators
export default todoSlice.reducer; // Exporting the reducer