import React from "react";
import { useCart } from "../context/CartContext";

export function Toast() {
  const { toastMessage } = useCart();

  return (
    <div style={{
      position: "fixed",
      // If there is a message, slide up to 40px from the bottom. Otherwise, hide it below the screen.
      bottom: toastMessage ? 40 : -100, 
      left: "50%",
      transform: "translateX(-50%)",
      background: "#FF6B00",
      color: "#0a0a0a",
      padding: "16px 32px",
      borderRadius: 32,
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: 15,
      boxShadow: "0 10px 40px rgba(255, 107, 0, 0.4)",
      transition: "bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", // Gives it a nice "bouncy" entrance
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      gap: 12,
      pointerEvents: "none" // Prevents the toast from blocking clicks
    }}>
      <span style={{ fontSize: 20 }}>🛒</span>
      {toastMessage}
    </div>
  );
}