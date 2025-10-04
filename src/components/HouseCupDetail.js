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
    <div className="p-12">
      <button
        onClick={goBack}
        className="medievalsharp-regular bg-parchment-dark hover:bg-parchment-600 px-3 py-1 rounded mb-4 text-ink-primary transition-all duration-300"
      >
        ← Back
      </button>

      <h2 className="pirata-one-regular text-3xl mb-4 text-gold-400">
        {cup.name || "House Cup"}
      </h2>

      <HouseCylinders houses={cup.houses || {}} />

      <PointsLog log={cup.log || []} />

      {user && cup && user.uid===cup.adminID ? (
        <AdminControls cupId={cupId} />
      ) : (
        <p className="sorts-mill-goudy-regular italic text-ink-muted mt-2">
          Login as professor to manage points and students.
        </p>
      )}
    </div>
  );
}
