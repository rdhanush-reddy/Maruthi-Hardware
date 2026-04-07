import React from "react";
import { PRODUCTS, ROUTES } from "../constants";
import { ProductCard } from "../components/ProductCard";

export function HomePage({ navigate }) {
  const featured = PRODUCTS.filter(p => p.badge === "Best Seller" || p.badge === "Top Rated").slice(0, 3);

  return (
    <div>
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "120px 24px 80px",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #1a1400 0%, #0a0a0a 70%)",
        position: "relative", overflow: "hidden"
      }}>
        {[320, 520, 720].map((s, i) => (
          <div key={i} style={{
            position: "absolute", width: s, height: s, borderRadius: "50%",
            border: `1px solid rgba(232,168,56,${0.06 - i * 0.015})`,
            top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none"
          }} />
        ))}

        <span style={{ fontSize: 72, display: "block", marginBottom: 24 }}>⚒️</span>
       <h1 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 700, color: "#f5f0e8", margin: "0 0 20px", lineHeight: 1.15,
          letterSpacing: "-0.01em"
        }}>
          The Right Tools for<br />Every <span style={{ color: "#FF6B00" }}>Project.</span>
        </h1>
        
        
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => navigate(ROUTES.SHOP)} style={{
            background: "#e8a838", border: "none", padding: "16px 36px", borderRadius: 40,
            fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15,
            cursor: "pointer", color: "#0a0a0a", letterSpacing: "0.08em", textTransform: "uppercase"
          }}>Shop the Collection</button>
          <button onClick={() => navigate(ROUTES.ABOUT)} style={{
            background: "transparent", border: "1px solid #333", padding: "16px 36px", borderRadius: 40,
            fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 15,
            cursor: "pointer", color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase"
          }}>Our Story</button>
        </div>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        background: "#111", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e"
      }}>
        {[["20,000+", "Happy Costumers"], ["4.7★", "Average Rating"], ["Free", "Returns"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center", padding: "32px 16px", borderRight: "1px solid #1e1e1e" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, color: "#e8a838" }}>{n}</div>
            <div style={{ color: "#666", fontSize: 13, marginTop: 4, fontFamily: "'Syne', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "80px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ color: "#e8a838", fontFamily: "'Syne', sans-serif", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 8px" }}>Hand Picked</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#f5f0e8", margin: 0 }}>Featured Pieces</h2>
          </div>
          <button onClick={() => navigate(ROUTES.SHOP)} style={{
            background: "none", border: "1px solid #333", padding: "10px 24px", borderRadius: 24,
            color: "#aaa", fontFamily: "'Syne', sans-serif", fontSize: 13, cursor: "pointer", fontWeight: 600
          }}>View All →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {featured.map(p => (
            <ProductCard key={p.id} product={p} navigate={navigate} wishlist={[]} toggleWishlist={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}