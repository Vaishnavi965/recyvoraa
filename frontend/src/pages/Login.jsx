import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/login",
        { email, password }
      );

      // store role in browser session
      localStorage.setItem("role", res.data.role);

      // redirect to correct dashboard
      navigate(`/${res.data.role}/dashboard`);
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT PANEL */}
      <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-emerald-700 to-lime-500 text-white p-16">
        <h1 className="text-4xl font-bold mb-6">
          AI-Powered Waste Management
        </h1>
        <ul className="space-y-4 text-lg">
          <li>✔ Smart image-based classification</li>
          <li>✔ Real-time analytics & insights</li>
          <li>✔ Sustainable recycling recommendations</li>
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center p-8">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
            {role?.toUpperCase()}
          </span>

          <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
          <p className="text-gray-500 mb-6">
            Log in to continue to Recyvora
          </p>

          <input
            className="input mb-3"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input mb-4"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn-primary w-full"
            onClick={handleLogin}
          >
            Log in →
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Demo accounts:
            <br />
            citizen@test.com / 1234
            <br />
            authority@test.com / 1234
            <br />
            company@test.com / 1234
          </p>
        </div>
      </div>
    </div>
  );
}
