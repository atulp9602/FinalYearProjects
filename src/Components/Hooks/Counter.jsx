import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#96d99e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textTransform: "uppercase", padding: "10px", flex: 0 }}>
        Counter
      </h2>
      <div className="counter_div">
        <h1>{count}</h1>
        <button
          id="counter_btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
