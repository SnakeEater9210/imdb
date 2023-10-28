import React from "react";

export default function DoubleDice({color}) {
  const num1 = Math.floor(Math.random() * 3 + 1);
  const num2 = Math.floor(Math.random() * 3 + 1);
  const isWinner = num1 === num2;
  return (
  <div className = {isWinner ? 'text-red-500' : color}>
      <h2>Double Dice</h2>
      {isWinner ? <h2>You Win</h2> : null}
      <p>Num1: {num1}</p>
      <p>Num1: {num2}</p>
  </div>
);

}
