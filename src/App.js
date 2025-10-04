import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import HouseCupList from "./components/HouseCupList";
import HouseCupDetail from "./components/HouseCupDetail";
import Header from "./components/Header";
import "./styles/fonts.css";
import AuthForm from "./components/AuthForm"


export default function App() {
  const [user, setUser] = useState(null);
  const [selectedCup, setSelectedCup] = useState(null);


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
  return () => unsubscribe();
  }, []);


  return (
    <div className="min-h-screen text-ink-primary py-[100px]">
      <Header />

      {selectedCup ? (
        <HouseCupDetail cupId={selectedCup} goBack={() => setSelectedCup(null)} user={user} />
        ) : (
        <HouseCupList onSelectCup={setSelectedCup} user={user} />
      )}

      <AuthForm user={user} />
    </div>
  );

}