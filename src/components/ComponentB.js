import React from "react";
import { useContext } from "react";
// import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function ComponentB() {
  const { increase, decrease, reset } = useContext(CounterContext);

  return (
    <div style={{ backgroundColor: "red" }}>
      <button
        onClick={increase}
        style={{
          color: "green",
          fontSize: 25,
          fontWeight: "bold",
          border: "2px solid red",
          background: "yellow",
          marginRight: 10,
        }}
      >
        +
      </button>

      <button
        onClick={decrease}
        style={{
          color: "green",
          fontSize: 25,
          fontWeight: "bold",
          border: "2px solid red",
          background: "yellow",
        }}
      >
        -
      </button>

      <button onClick={reset}>reset</button>
    </div>
  );
}

export default ComponentB;
