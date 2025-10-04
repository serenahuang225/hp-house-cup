import React from "react";

export default function House({ name, color, points, members }) {
  // Cylinder height scaling (max 1000 points = full height)
  const maxPoints = 1000;
  const heightPercent = Math.min(100, (points / maxPoints) * 100);

  return (
    <div className="flex flex-col items-center mx-2">
      <div className="relative w-16 h-64 bg-gray-700 rounded-lg overflow-hidden shadow-lg">
        <div
          className="absolute bottom-0 w-full transition-all duration-500"
          style={{ height: `${heightPercent}%`, backgroundColor: color }}
        />
      </div>
      <h3 className="pirata-one-regular text-xl mt-2">{name}</h3>
      <p className="sorts-mill-goudy-regular text-lg">{points} pts</p>

      {members && members.length > 0 && (
        <ul className="sorts-mill-goudy-regular text-xs mt-2 max-h-24 overflow-y-auto text-center">
          {members.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      )}
    </div>
  );
}