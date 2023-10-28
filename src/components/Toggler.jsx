"use client";
import React, { useState } from 'react'


export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const increaseCount = () => {setCount(count+1)};

    const happiness = () => {
        setIsHappy(!isHappy);
        increaseCount();
    };

  return (
    <div onClick={happiness}>
        {isHappy ? "😀" : "😔"}
        <p>{count}</p></div>
  )
}
