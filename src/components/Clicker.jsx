"use client";

import React from 'react'




export default function Clicker({message, buttonText}) {
  const handleClick = () => {
    alert(message)
  }
  return (
    <div>
        <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}
