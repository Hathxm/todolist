import './App.css';
import React, { useState } from 'react';


function TodoList() {
  // State variable to store list of todos
  const [todos, setTodos] = useState([]);
  
  // State variable to store the current todo input
  const [todoInput, setTodoInput] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== '') {
      // Add new todo to todos array
      setTodos([...todos, todoInput]);
      // Clear todo input
      setTodoInput('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((item,idx) => idx !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className='container'>
      <h1>Todo List</h1>
      </div>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <input className='search'
          type="text" 
          value={todoInput} 
          onChange={(e) => setTodoInput(e.target.value)} 
          placeholder="Enter new todo" 
        />
    
        <button className='button' type="submit">Add</button>
     
      </form>
      </div>
      <div className='container'>
      <ul>
     
        {/* Render list of todos */}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
     
            <button className='dltbtn' onClick={() => handleDelete(index)}>Delete</button>
      
          </li>
         
        ))}
         
      </ul>
      </div>
      </div>
    // </div>
  );
} 

export default TodoList;

// export default Counter