export default function TodoList({ todos, onDelete }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <li key={index} className="flex justify-between bg-white px-4 py-2 border rounded-md">
          <span>{todo}</span>
          <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}
