import React from "react";
import { ROUTES } from "../constants";

export function Footer({ navigate }) {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1a1a1a", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", gap: 40 }}>
        
        {/* Brand Column */}
        <div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, color: "#FF6B00", margin: "0 0 16px" }}>Maruthi Hardwares</h2>
          <p style={{ color: "#666", fontSize: 14, lineHeight: 1.6, fontFamily: "'Syne', sans-serif" }}>
            A legacy of trust and quality since 1946. Supplying the finest Indian hardware, agriculture, and household essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: "#f5f0e8", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {["Home", "Shop", "About"].map(item => (
              <li key={item} onClick={() => navigate(ROUTES[item.toUpperCase()])} style={{ color: "#888", fontSize: 14, cursor: "pointer", transition: "0.2s" }} onMouseEnter={e => e.target.style.color = "#FF6B00"} onMouseLeave={e => e.target.style.color = "#888"}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ color: "#f5f0e8", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Visiting Hours</h4>
          <p style={{ color: "#888", fontSize: 14, margin: "0 0 8px", fontFamily: "'Syne', sans-serif" }}>Mon – Sat: 9:00 AM – 8:00 PM</p>
          <p style={{ color: "#888", fontSize: 14, margin: 0, fontFamily: "'Syne', sans-serif" }}>Sunday: 10:00 AM – 2:00 PM</p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: "#f5f0e8", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Get In Touch</h4>
          <p style={{ color: "#888", fontSize: 14, marginBottom: 12, display: "flex", gap: 8 }}>
            <span style={{ color: "#FF6B00" }}>📍</span> 99 Gandhi Road, <br />Opp. Jamuna stores ,Tirupathi, A.P - 517501
          </p>
          <p style={{ color: "#888", fontSize: 14, marginBottom: 12, display: "flex", gap: 8 }}>
            <span style={{ color: "#FF6B00" }}>📞</span> +91 9909090976
          </p>
          <p style={{ color: "#888", fontSize: 14, display: "flex", gap: 8 }}>
            <span style={{ color: "#FF6B00" }}>✉️</span> support@maruthihardwares.com
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "60px auto 0", padding: "30px 32px 0", borderTop: "1px solid #1a1a1a", textAlign: "center", color: "#444", fontSize: 12, fontFamily: "'Syne', sans-serif" }}>
        © 2026 Maruthi Hardwares. All Rights Reserved. Designed for Excellence.
      </div>
    </footer>
  );
}