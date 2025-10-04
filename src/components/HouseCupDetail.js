import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import HouseCylinders from "./HouseCylinders";
import PointsLog from "./PointsLog";
import AdminControls from "./AdminControls";

export default function HouseCupDetail({ cupId, goBack, user }) {
  const [cup, setCup] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "houseCups", cupId), (snapshot) => {
      setCup({ id: snapshot.id, ...snapshot.data() });
    });
    return () => unsub();
  }, [cupId]);

  if (!cup) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <button
        onClick={goBack}
        className="medievalsharp-regular bg-gray-700 px-3 py-1 rounded mb-4"
      >
        ← Back
      </button>

      <h2 className="pirata-one-regular text-3xl mb-4 text-yellow-300">
        {cup.name || "House Cup"}
      </h2>

      <HouseCylinders houses={cup.houses || {}} />

      <PointsLog log={cup.log || []} />

      {user ? (
        <AdminControls cupId={cupId} />
      ) : (
        <p className="sorts-mill-goudy-regular italic text-gray-400 mt-2">
          Login as admin to manage points.
        </p>
      )}
    </div>
  );
}
