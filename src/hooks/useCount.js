import { useState } from "react";

export function useCount(value) {
  const [count, setCount] = useState(value)

  function addToCount() {
    setCount(val => val + 1);
  }

  return { count, addToCount }
}