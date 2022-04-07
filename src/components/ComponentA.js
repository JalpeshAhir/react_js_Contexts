import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import ComponentB from "./ComponentB";

function ComponentA() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <div style={{ backgroundColor: "wheat" }}>
        <p>Count : {count}</p>
        <ComponentB />
      </div>
    </div>
  );
}

export default ComponentA;
