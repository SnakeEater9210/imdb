import React from 'react'
import Die from './Die'
import { v4 as uuid } from "uuid";

export default function Dice({dice, colors=[]}) {
    return (
      <div>
          {dice.map((d, index) => (
              <Die key ={uuid()} val = {d} color = {colors[index]} />
          ))}
      </div>
    )
  }
  