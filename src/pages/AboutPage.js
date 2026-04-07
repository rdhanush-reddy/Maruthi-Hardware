import React from "react";
import { LegacyCounter } from "../components/LegacyCounter";
import { ROUTES } from "../constants";

export function AboutPage({ navigate }) {
  return (
    <div style={{ paddingTop: 120, paddingBottom: 100, minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
        
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 6vw, 64px)", color: "#f5f0e8", marginBottom: 24 }}>
          Our Legacy
        </h1>
        
        <p style={{ color: "#888", fontSize: 18, lineHeight: 1.8, fontFamily: "'Syne', sans-serif", marginBottom: 48 }}>
          Founded in the heart of the agricultural belt, Maruthi Hardwares began as a small family-owned shop dedicated to providing honest, durable tools to local farmers. Today, we stand as a trusted pillar in the community, bridging the gap between traditional craftsmanship and modern agricultural demands.
        </p>

        {/* WE IMPORT AND USE THE CLASS COMPONENT HERE */}
        <LegacyCounter />

        <div style={{ marginTop: 60 }}>
          <button 
            onClick={() => navigate(ROUTES.SHOP)} 
            style={{ background: "#FF6B00", border: "none", padding: "16px 40px", borderRadius: 40, fontWeight: 700, cursor: "pointer", color: "#0a0a0a", textTransform: "uppercase", fontFamily: "'Syne', sans-serif" }}
          >
            Explore Our Tools
          </button>
        </div>

      </div>
    </div>
  );
}