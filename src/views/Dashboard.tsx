import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { signOut } = useContext(AuthContext);
  const userdetail = useContext(AuthContext);

  return (
    <div>
      <div>
        <h1>Dashboard Page</h1>
        <h1>{userdetail.user.user}</h1>

        <button
          onClick={() => {
            signOut(() => {});
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
