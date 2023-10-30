"use client";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddEmoji() {
  const [emoji, setEmoji] = useState([{id: uuid(), emoji: "-.- "}]);
  const addEmoji = () => {
    setEmoji((emoji) => [...emoji, {id: uuid(), emoji: "😊"}])
    }
  const deleteEmoji = (id) => {
    setEmoji((emoji) => emoji.filter((e) => e.id !== id))
  }  
  const changeToHearths = () => {
    setEmoji((emoji) => {
         return emoji.map((e) => {
            return {...e, emoji: "❤️"}
        })
    })
  }
  return (
    <div>
      {emoji.map((e) => (
        <span onClick={() => deleteEmoji(e.id)} key={e.id}>{e.emoji}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={changeToHearths}>Change to Hearths</button>
    </div>
  );
}
