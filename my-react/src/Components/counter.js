import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter++)}>
        increment the counter
      </button>
    </>
  );
};



export default Counter;
