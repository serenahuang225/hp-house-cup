import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3 bg-gray-900/70 p-6 rounded-xl max-w-sm mx-auto mt-10 shadow-lg">
      <h2 className="pirata-one-regular text-2xl text-yellow-400 mb-2">
        Admin Login
      </h2>
      <button
        onClick={handleGoogleLogin}
        className="medievalsharp-regular bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded text-black shadow-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}