import React, { useState } from "react";

export default function MembersHouse({ houseName, members = [] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[180px] h-[220px] perspective cursor-pointer m-4"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT - House Crest */}
        {/*  border-4 border-[#33230f] bg-[rgba(221,184,139,0.9)] */}
        <img 
          src={`/houses/${houseName.toLowerCase()}.png`} 
          alt={`${houseName} crest`} 
          className="w-[180px] h-[220px] rounded-xl object-contain absolute inset-0 flex items-center justify-center bg-cover" 
        />

        {/* BACK - Member Information */}
        <div className="absolute inset-0 flex flex-col items-center rounded-xl border-4 border-[#33230f] overflow-y-auto bg-[rgba(221,184,139,0.97)] shadow-lg rotate-y-180 backface-hidden p-4 text-center">
          <h3 className="pirata-one-regular text-lg mb-2">{houseName} Members</h3>
          {members.length === 0 ? (
            <p className="sorts-mill-goudy-regular italic">No members yet</p>
          ) : (
            <ul className="sorts-mill-goudy-regular text-xs text-center text-ink-muted">
              {members.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
