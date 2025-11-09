import type { Todo } from "../App";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px",
        marginBottom: "10px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9ecef")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{
          width: "20px",
          height: "20px",
          cursor: "pointer",
          accentColor: "#4CAF50",
        }}
      />
      <span
        style={{
          flex: 1,
          fontSize: "16px",
          color: todo.done ? "#9e9e9e" : "#333",
          textDecoration: todo.done ? "line-through" : "none",
          transition: "color 0.2s",
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          width: "32px",
          height: "32px",
          fontSize: "18px",
          color: "#e74c3c",
          backgroundColor: "transparent",
          border: "2px solid #e74c3c",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e74c3c";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#e74c3c";
        }}
      >
        ✕
      </button>
    </li>
  );
}
