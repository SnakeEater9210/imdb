import React from 'react'

export default function PropertyElement({id, name, rating, price}) {
    
  return (
    <div className='m-4' key={id}>
        <h1>Name: {name}</h1>
        <h2>Rating: {rating}</h2>
        <h3>Price: {price}</h3>
    </div>
  )
}


// const properties = [
//     { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//     { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//     { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//     { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//     { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//     { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
//   ];