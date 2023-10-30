"use client";
import React, { useState } from "react";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min);
}

export default function ColorBox({ colors }) {
   const [singleColor, setSingleColor] = useState(colors[getRandomInt(0, colors.length - 1)]);

  const changeColor = () => {
    setSingleColor(colors[getRandomInt(0, colors.length - 1)])
  }
  return (
    <div onClick={changeColor}>
      <svg width="50" height="50">
        <rect width="50" height="50" fill={singleColor} />
      </svg>
    </div>
  );
}