import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import HouseCupList from "./components/HouseCupList";
import HouseCupDetail from "./components/HouseCupDetail";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import LogoutButton from "./components/LogoutButton";
import "./styles/fonts.css";


export default function App() {
  const [user, setUser] = useState(null);
  const [selectedCup, setSelectedCup] = useState(null);


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
  return () => unsubscribe();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Header />


      {/* Show login form only if not logged in, but cups are always visible */}
      {!user && (
        <div className="flex justify-center mb-4">
          <AuthForm />
        </div>
      )}


      {user && (
        <div className="flex justify-center mb-4">
          <LogoutButton />
        </div>
      )}


      {selectedCup ? (
        <HouseCupDetail cupId={selectedCup} goBack={() => setSelectedCup(null)} user={user} />
        ) : (
        <HouseCupList onSelectCup={setSelectedCup} user={user} />
      )}
    </div>
  );

}