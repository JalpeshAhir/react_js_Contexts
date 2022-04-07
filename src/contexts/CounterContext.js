import { useContext } from "react";
import { useState, createContext } from "react";

export const CounterContext = createContext();

// export const useCounter = () => useContext(CounterContext);
export const useCounter = () => useContext(CounterContext);

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count > 9) {
      setCount((count = 10));
    } else {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    // setCount(count - 1);
    if (count < 1) {
      setCount((count = 0));
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const value = { count, increase, decrease, reset };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
