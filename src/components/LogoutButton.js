import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <button
      onClick={handleLogout}
      className="medievalsharp-regular bg-gryffindor-600 hover:bg-gryffindor-500 px-4 py-2 rounded text-ink-50 shadow-md transition-all duration-300"
    >
      Logout
    </button>
  );
}