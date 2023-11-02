"use client";
import React, { useState } from 'react'
import Dice from './Dice'

function random6(){
    return Math.floor(Math.random() * 6) + 1
}

function getRolls(n){
    return Array.from({length: n}, () => random6());
}


export default function LuckyN({numDice =2, goal=7}) {
    const [dice, setDice] = useState(getRolls(numDice))

  return (
    <div>Lucky {numDice}
    <Dice dice = {dice}/>
    Test
    </div>
  )
}
