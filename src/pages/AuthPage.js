import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "../constants";

export function AuthPage({ navigate }) {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name || "Customer"); // Logs the user in
    navigate(ROUTES.HOME); // Sends them back to the home page
  };

  return (
    <div style={{ paddingTop: 120, minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{ background: "#111", padding: 40, borderRadius: 24, width: "100%", maxWidth: 400, height: "fit-content", border: "1px solid #1e1e1e" }}>
        
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#f5f0e8", marginBottom: 8, textAlign: "center" }}>
          {isLogin ? "Welcome Back" : "Join Our Legacy"}
        </h2>
        <p style={{ color: "#888", textAlign: "center", marginBottom: 32, fontFamily: "'Syne', sans-serif" }}>
          {isLogin ? "Sign in to your Maruthi account" : "Create an account to track orders"}
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {!isLogin && (
            <input required type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: 16, borderRadius: 12, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
          )}
          <input required type="email" placeholder="Email Address" 
            style={{ width: "100%", padding: 16, borderRadius: 12, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
          <input required type="password" placeholder="Password" 
            style={{ width: "100%", padding: 16, borderRadius: 12, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
          
          <button type="submit" style={{ width: "100%", background: "#FF6B00", color: "#0a0a0a", padding: 16, borderRadius: 32, border: "none", fontWeight: 800, cursor: "pointer", marginTop: 16, textTransform: "uppercase" }}>
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p style={{ textAlign: "center", color: "#888", marginTop: 24, cursor: "pointer" }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "New to Maruthi? " : "Already have an account? "}
          <span style={{ color: "#FF6B00", fontWeight: "bold" }}>{isLogin ? "Sign Up" : "Log In"}</span>
        </p>
      </div>
    </div>
  );
}