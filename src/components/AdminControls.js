import React, { useState } from "react";
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminControls({ cupId }) {
  const [house, setHouse] = useState("Gryffindor");
  const [points, setPoints] = useState(0);
  const [reason, setReason] = useState("");
  const [newMember, setNewMember] = useState("");

  const handlePointsSubmit = async (e) => {
    e.preventDefault();
    if (!reason.trim()) return;

    const ref = doc(db, "houseCups", cupId);
    await updateDoc(ref, {
      [`houses.${house}.points`]: increment(points),
      log: arrayUnion({
        house,
        change: points,
        reason,
        time: Date.now(),
      }),
    });
    setPoints(0);
    setReason("");
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    if (!newMember.trim()) return;

    const ref = doc(db, "houseCups", cupId);
    await updateDoc(ref, {
      [`houses.${house}.members`]: arrayUnion(newMember),
    });

    setNewMember("");
  };

  return (
    <div className="mt-6 bg-gray-800 p-4 rounded space-y-6">
      <h3 className="pirata-one-regular text-xl text-yellow-200">
        Admin Controls
      </h3>

      {/* --- Add / Subtract Points --- */}
      <form onSubmit={handlePointsSubmit} className="space-y-2">
        <h4 className="medievalsharp-regular text-lg">Adjust Points</h4>
        <div className="flex items-center space-x-2">
          <select
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            className="p-2 rounded text-black"
          >
            <option>Gryffindor</option>
            <option>Slytherin</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
          </select>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            className="p-2 rounded text-black w-20"
          />
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason"
            className="p-2 rounded text-black flex-1"
          />
          <button
            type="submit"
            className="medievalsharp-regular bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>

      {/* --- Add Member to House --- */}
      <form onSubmit={handleAddMember} className="space-y-2">
        <h4 className="medievalsharp-regular text-lg">Add Member</h4>
        <div className="flex items-center space-x-2">
          <select
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            className="p-2 rounded text-black"
          >
            <option>Gryffindor</option>
            <option>Slytherin</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
          </select>
          <input
            type="text"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="Member name"
            className="p-2 rounded text-black flex-1"
          />
          <button
            type="submit"
            className="medievalsharp-regular bg-green-600 hover:bg-green-500 px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
