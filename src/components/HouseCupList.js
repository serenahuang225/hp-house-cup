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
      adminID: user.uid
    });

    setNewCupName("");
  };

  return (
    <div className="p-12">
      <h2 className="pirata-one-regular text-3xl mb-4 text-gold-500">
        Active House Cups
      </h2>

      <ul className="space-y-2 mb-6">
        {cups.map((cup) => (
          <li
            key={cup.id}
            className="sorts-mill-goudy-regular cursor-pointer bg-parchment-container p-3 rounded hover:bg-parchment-dark transition-all duration-300 text-ink-primary hover:glow-subtle"
            onClick={() => onSelectCup(cup.id)}
          >
            {cup.name || "Unnamed Cup"}
          </li>
        ))}
      </ul>


      {user && (
      <>
        <h2 className="pirata-one-regular text-3xl mb-4 text-gold-500">
          Create a New House Cup
        </h2>
        <form onSubmit={createNewCup} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="New Cup Name"
            value={newCupName}
            onChange={(e) => setNewCupName(e.target.value)}
            className="sorts-mill-goudy-regular p-2 rounded text-ink-primary flex-1"
          />
          <button
            type="submit"
            className="medievalsharp-regular bg-slytherin-600 hover:bg-slytherin-500 px-4 py-2 rounded text-ink-50 transition-all duration-300"
          >
            Create
          </button>
        </form>
      </>
      )}
    </div>
  );
}