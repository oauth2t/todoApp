// TodoList.js

'use client';

import React, { useState } from 'react';
import { InputField, AddButton, DeleteButton } from './TodoComponents';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl space-y-6">
      <h1 className="text-3xl font-bold text-center text-purple-700">My Todos</h1>

      <div className="flex gap-2">
        <InputField value={input} onChange={(e) => setInput(e.target.value)} />
        <AddButton onClick={addTodo} />
      </div>

      <ul className="space-y-2 max-h-80 overflow-y-auto">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-700">{todo}</span>
            <DeleteButton onClick={() => deleteTodo(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

