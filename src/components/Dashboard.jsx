import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // ✅ Use correct key
    if (!loggedInUser) {
      alert("Please log in first!");
      navigate("/login");
    } else {
      setUser(loggedInUser); // ✅ Set state correctly
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // ✅ Logout properly
    navigate("/login"); // ✅ Redirect
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h3 className="text-3xl font-bold mb-4">📝 Things to Do</h3>
      {user && <p className="text-lg text-gray-700 mb-6">Welcome, {user.email}!</p>}

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <TodoForm />
        <TodoList />
      </div>
      <button
  onClick={handleLogout} // Ensure you have the logout function
  style={{
    backgroundColor: "orange",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    marginTop: "10px",
  }}
>
  Logout
</button>
    </div>
  );
};

export default Dashboard;
