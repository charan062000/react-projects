import React from 'react'
import { useSelector } from "react-redux";
export const Count = () => {
    const count = useSelector((state) => state.counter.value);
  return (
      <div>
          <h1>{count}</h1>
    </div>
  )
}
