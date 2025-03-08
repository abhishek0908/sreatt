import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const navigate = useNavigate(); // For navigation after successful sign-in

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
  
    try {
      const response = await fetch("https://sreatt-backend.vercel.app/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data.token)
      if (response.ok) {
        setMessage("Sign-in successful!");
        setMessageType("success");
        setLoading(false);
  
        // Store the token and role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role); // Assuming 'data.role' contains the role
        console.log(data.role)
        // Redirect based on role
        if (data.role === "admin") {
          navigate("/admin");
        } else if (data.role === "distributor") {
          navigate("/distributor");
        } else {
          setMessage("Invalid role. Please contact support.");
          setMessageType("error");
        }
      } else {
        setMessage(data.message || "Invalid email or password.");
        setMessageType("error");
        setLoading(false);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setMessageType("error");
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-100 text-center mb-6">Sign In</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="relative">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`mt-4 p-4 rounded-lg font-medium text-center ${
              messageType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {message}
          </div>
        )}

        <p className="text-gray-300 text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
