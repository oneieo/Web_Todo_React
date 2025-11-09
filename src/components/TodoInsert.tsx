// import { useState, type FormEvent, type ChangeEvent } from "react";

// export default function TodoInsert({
//   onAdd,
// }: {
//   onAdd: (text: string) => void;
// }) {
//   const [value, setValue] = useState("");

//   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const text = value.trim();
//     if (!text) return;

//     onAdd(text);
//     setValue("");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         placeholder="할 일을 입력하세요"
//       />
//       <button type="submit">추가</button>
//     </form>
//   );
// }

import { useState, type FormEvent, type ChangeEvent } from "react";

export default function TodoInsert({
  onAdd,
}: {
  onAdd: (text: string) => void;
}) {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지 새로고침 방지
    const text = value.trim();
    if (!text) return;

    onAdd(text);
    setValue(""); // 입력창 초기화
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "25px",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
        style={{
          flex: 1,
          padding: "12px 16px",
          fontSize: "15px",
          border: "2px solid #e0e0e0",
          borderRadius: "8px",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#4CAF50")}
        onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
      />
      <button
        type="submit"
        style={{
          padding: "12px 24px",
          fontSize: "15px",
          fontWeight: "600",
          color: "white",
          backgroundColor: "#4CAF50",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#45a049")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#4CAF50")
        }
      >
        추가
      </button>
    </form>
  );
}
