import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "./redux/features/counter/CounterSlice";

const Counter = () => {
  const value = useSelector((state) => state.counter.count); //useselector is for value selecting
  const dispatch = useDispatch(); //dispatch is for selecting method

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>

      <p>{value}</p>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
