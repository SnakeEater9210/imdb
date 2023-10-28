import React from "react";

export default function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((i) => (
          <li key={i.id}
            className={
              (i.completed ? "text-red-500 line-through" : "text-black")
            }
          >
            {i.name} - {i.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

