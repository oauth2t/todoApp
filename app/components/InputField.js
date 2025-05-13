export default function InputField({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="flex-1 border px-3 py-2 rounded-md"
      placeholder="Enter a task"
    />
  );
}
