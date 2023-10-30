"use client";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Player from "./Player";

export default function ScoreKeeper({numPlayers=10, target=10}) {
  const [players, setPlayers] = useState(
    new Array(numPlayers).fill().map(() => ({ id: uuid(), score: 0 }))
  );
const increaseScore = (id) => {
    setPlayers((prevPlayers) => {
        return prevPlayers.map((p) => {
            if (p.id === id) {
                return {...p, score: p.score + 1};
            } 
            return p;
        })
    })
}
const resetGame = () => {
    setPlayers(prevPlayers => {
        return prevPlayers.map(p => {
            return { ...p, score: 0 };
        });
    });
};

  return (
    <div>
        {players.map((p, index) => (
            <div className="flex m-1">
            <p className="m-2">Player {index +1}  :  {p.score}</p>
            <button onClick={() => increaseScore(p.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out">
              +1
            </button>
            {p.score === target ? <h2>This is a winner</h2> : null} 
          </div>
        ))}
        <button onClick={resetGame}>Reset</button>
    </div>
  );
}
