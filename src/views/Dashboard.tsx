import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard Page</h1>

      <button
        onClick={() => {
          signOut(() => {});
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
