import React from "react";

export default function PointsLog({ log }) {
  return (
    <div className="mt-4 bg-gray-800 p-4 rounded">
      <h3 className="pirata-one-regular text-xl mb-2 text-yellow-200">
        Points Log
      </h3>
      <ul className="sorts-mill-goudy-regular space-y-1 max-h-60 overflow-y-auto">
        {log.length === 0 && (
          <li className="italic text-gray-400">No entries yet</li>
        )}
        {log.map((entry, idx) => (
          <li key={idx} className="text-sm">
            <span className="font-bold">{entry.house}</span> {entry.change > 0 ? "earned" : "lost"}{" "}
            {Math.abs(entry.change)} points – {entry.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}