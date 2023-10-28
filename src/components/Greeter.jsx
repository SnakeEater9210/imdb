import React from 'react'

export default function Greeter({list, color}) {
  return (
    <div><h2 style={{color : color}}>Hello {list} </h2></div>
  )
}
