import React from 'react'

export default function SlotMachine({val1, val2, val3}) {
const isWinner = val1 === val2 && val2 === val3;
  return (
    <div className={ isWinner ? "text-red-500" : null}>
        <h1>{val1} {val2} {val3}</h1>
        {isWinner ? <h2>This is a winner</h2> : null} 
        </div>
  )
}
