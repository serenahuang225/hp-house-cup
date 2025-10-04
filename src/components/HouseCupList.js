import React, { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function HouseCupList({ onSelectCup, user }) {
  const [cups, setCups] = useState([]);
  const [newCupName, setNewCupName] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "houseCups"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCups(data);
    });
    return () => unsub();
  }, []);

  const createNewCup = async (e) => {
    e.preventDefault();
    if (!newCupName.trim()) return;

    await addDoc(collection(db, "houseCups"), {
      name: newCupName,
      createdAt: serverTimestamp(),
      houses: {
        Gryffindor: { points: 0, members: [] },
        Slytherin: { points: 0, members: [] },
        Ravenclaw: { points: 0, members: [] },
        Hufflepuff: { points: 0, members: [] },
      },
      log: [],
    });

    setNewCupName("");
  };

  return (
    <div className="p-4">
      <h2 className="pirata-one-regular text-3xl mb-4 text-yellow-300">
        Active House Cups
      </h2>

      <ul className="space-y-2 mb-6">
        {cups.map((cup) => (
          <li
            key={cup.id}
            className="sorts-mill-goudy-regular cursor-pointer bg-gray-800 p-3 rounded hover:bg-gray-700 transition"
            onClick={() => onSelectCup(cup.id)}
          >
            {cup.name || "Unnamed Cup"}
          </li>
        ))}
      </ul>

      {user && (
        <form onSubmit={createNewCup} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="New Cup Name"
            value={newCupName}
            onChange={(e) => setNewCupName(e.target.value)}
            className="sorts-mill-goudy-regular p-2 rounded text-black flex-1"
          />
          <button
            type="submit"
            className="medievalsharp-regular bg-green-600 px-4 py-2 rounded"
          >
            Create
          </button>
        </form>
      )}
    </div>
  );
}