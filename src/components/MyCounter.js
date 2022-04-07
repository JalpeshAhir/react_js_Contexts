import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function MyCounter() {
  const { count, increase, decrease } = useContext(CounterContext);

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is : {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default MyCounter;
