import React, { useState } from "react";

const Counter = () => {
  const [contador, setcontador] = useState(0);

  return (
    <>
      <h2 role="counter">Counter: {contador}</h2>
      <button onClick={() => setcontador((actual) => actual + 1)}>+1</button>
      <button
        aria-label="disminuir"
        onClick={() => setcontador((actual) => actual - 1)}
      >
        -1
      </button>
    </>
  );
};

export default Counter;
