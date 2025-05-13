'use client';
import { useState } from 'react';
import InputField from './components/InputField';
import AddButton from './components/AddButton';
import TodoList from './components/TodoList';

export default function Home() {
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
    <main className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">TODO App</h1>
      <div className="flex gap-2 mb-4">
        <InputField value={input} onChange={(e) => setInput(e.target.value)} />
        <AddButton onClick={addTodo} />
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </main>
  );
}
