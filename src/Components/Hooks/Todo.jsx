import React, { useState } from "react";
import List from "./List";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  function handleInput(event) {
    setTodo(event.target.value);
  }

  function addTodo(event) {
    todo
      ? setTodoArr((prevArrData) => [...prevArrData, todo])
      : setTodoArr((prevArrData) => [...prevArrData]);
    setTodo("");
  }

  function handleRemove(id) {
    console.log("handle", id);
    setTodoArr((prevArrData) => {
      return prevArrData.filter((val, ind) => id !== ind);
    });
  }

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#96d99e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h2 style={{ textTransform: "uppercase", padding: "10px", flex: 0 }}>
        Todo
      </h2>
      <div className="todo_box">
        <div className="todo_input">
          <input
            type="text"
            value={todo}
            onChange={handleInput}
            placeholder="Add Todo"
          />
          <button id="todo_btn" onClick={addTodo}>
            +
          </button>
        </div>
        <ul className="list">
          {todoArr &&
            todoArr.map((todo, index) => (
              <List
                key={index}
                id={index}
                todo={todo}
                handleRemove={handleRemove}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
