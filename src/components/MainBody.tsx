"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { increaseByAmount } from "../redux/feature/counter/counterSlice";

const MainBody = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const handleIncrease = () => {
    dispatch(increaseByAmount(5));
  };
  return (
    <div className="pt-12">
      <button onClick={handleIncrease}>Increase</button>
      <div>Count is : {count}</div>
    </div>
  );
};

export default MainBody;
