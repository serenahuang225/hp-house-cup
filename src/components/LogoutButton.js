import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <button
      onClick={handleLogout}
      className="medievalsharp-regular bg-red-700 hover:bg-red-600 px-4 py-2 rounded text-white shadow-md"
    >
      Logout
    </button>
  );
}