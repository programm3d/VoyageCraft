import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Failed to log out", err);
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser && currentUser.email}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
