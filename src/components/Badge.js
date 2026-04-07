import React from "react";
import { validateProps } from "../utils";

export function Badge({ label }) {
  validateProps({ label }, { label: { required: true, type: "string" } }, "Badge");
  const colors = { "Best Seller": "#e8a838", "New": "#4ecdc4", "Top Rated": "#a78bfa", "Sale": "#f87171", "Premium": "#f9a825" };
  return (
    <span style={{
      background: colors[label] || "#888", color: "#0a0a0a", fontSize: 10, fontWeight: 700,
      padding: "3px 8px", borderRadius: 20, letterSpacing: "0.08em", textTransform: "uppercase",
      fontFamily: "'Syne', sans-serif"
    }}>{label}</span>
  );
}