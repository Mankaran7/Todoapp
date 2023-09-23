import React, { useState } from "react"; // Import React and useState
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch(); // Call useDispatch to get the dispatch function
  const [todoText, setTodoText] = useState(''); // Initialize todoText state

  function addTodo(todoText) {
    dispatch({ type: 'add_todo', payload: { todoText } }); // Dispatch the action to add a new todo
  }

  return (
    <>
      <input
        placeholder="Add your new todo"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={() => {
        addTodo(todoText);
        setTodoText('');
      }}>Submit</button>
    </>
  );
}

export default AddTodo;
