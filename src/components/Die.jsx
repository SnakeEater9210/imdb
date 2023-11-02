import React from "react";

export default function Die({ val, color = "bg-indigo-600" }) {
  return (
    <div className={`${color} rounded-lg text-white inline-block w-12 h-9 flex items-center justify-center mr-2 font-bold text-xl`}>
      {val}
    </div>
  );
}
