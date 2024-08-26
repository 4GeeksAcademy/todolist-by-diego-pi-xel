import React, { useState } from 'react';


export const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>todos</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={addTodo}
      />
      <ul>
        {todos.length === 0 ? (
          <li id="empty-list-message">No hay tareas, añadir tareas</li>
        ) : (
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="delete" onClick={() => deleteTodo(index)}>
              <i class="fas fa-trash"></i>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
