import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import LogoutButton from "./LogoutButton";

export default function AuthForm({user}) {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between align-middle space-x-3 bg-parchment-dark px-4 py-2 rounded-xl max-w-md mx-auto shadow-parchment glow-subtle">
      <h2 className="pirata-one-regular text-xl text-gold-500">
        Professor {user ? user?.displayName : "Login"}
      </h2>

      {
        user ? 
        <LogoutButton /> : 
        <button
          onClick={handleGoogleLogin}
          className="medievalsharp-regular bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded text-ink-900 shadow-md transition-all duration-300"
        >
          Sign in with Google
        </button>
      }

    </div>
  );
}