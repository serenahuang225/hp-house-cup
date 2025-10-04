import React from "react";

export default function PointsLog({ log }) {
  return (
    <div className="mt-4 bg-parchment-container p-4 rounded shadow-parchment">
      <h3 className="pirata-one-regular text-xl mb-2 text-gold-500">
        Points Log
      </h3>
      <ul className="sorts-mill-goudy-regular space-y-1 max-h-60 overflow-y-auto">
        {log.length === 0 && (
          <li className="italic text-ink-muted">No entries yet</li>
        )}
        {log.map((entry, idx) => (
          <li key={idx} className="text-sm text-ink-primary">
            <span className="font-bold text-ink-900">{entry.house}</span> {entry.change > 0 ? "earned" : "lost"}{" "}
            {Math.abs(entry.change)} points – {entry.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}