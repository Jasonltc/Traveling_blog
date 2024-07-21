import React from "react";

export default function PopularCountries({ children, onClick }) {
  return (
    <li className="text-lg cursor-pointer">
      <button
        className="border-solid border-2 border-slate-800 py-2 px-4"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
