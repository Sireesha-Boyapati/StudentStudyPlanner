import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }

  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <p>Welcome to Student Study Planner 🎉</p>

    </div>
  );
}

export default Dashboard;