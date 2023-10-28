import React from 'react'
import ColorBox from './ColorBox'

export default function ({colors}) {
    
  return (
    <div className="grid grid-cols-5 gap-1 p-8">
      {[...Array(25)].map((_, index) => (
        <ColorBox key={index} colors={colors}/>
      ))}
    </div>
  )
}
