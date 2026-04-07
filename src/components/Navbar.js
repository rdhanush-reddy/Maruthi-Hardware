import React from "react";
import { ROUTES } from "../constants";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export function NavbarWithCart({ navigate, route }) {
  const { count, searchQuery, setSearchQuery, wishlist } = useCart();
  const { user } = useAuth(); // Pulls the user from AuthContext

  return (
    <nav style={{ 
      position: "fixed", top: 0, width: "100%", background: "rgba(5,5,5,0.9)", 
      backdropFilter: "blur(10px)", borderBottom: "1px solid #1a1a1a", zIndex: 100 
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <div onClick={() => navigate(ROUTES.HOME)} style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#FF6B00", cursor: "pointer", letterSpacing: "0.05em" }}>
          Maruthi Hardwares
        </div>

        {/* LIVE SEARCH BAR */}
        <div style={{ flex: 1, maxWidth: 400, margin: "0 40px" }}>
          <input 
            type="text" 
            placeholder="Search tools, brands, or categories..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (route !== ROUTES.SHOP) navigate(ROUTES.SHOP);
            }}
            style={{
              width: "100%", padding: "10px 20px", borderRadius: 20, background: "#111", 
              border: "1px solid #333", color: "#f5f0e8", outline: "none", fontFamily: "'Syne', sans-serif"
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center", fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600 }}>
          <span onClick={() => navigate(ROUTES.SHOP)} style={{ cursor: "pointer", color: route === ROUTES.SHOP ? "#FF6B00" : "#f5f0e8" }}>Shop</span>
          <span onClick={() => navigate(ROUTES.ABOUT)} style={{ cursor: "pointer", color: route === ROUTES.ABOUT ? "#FF6B00" : "#f5f0e8" }}>Legacy</span>
          
          <span style={{ color: "#888", display: "flex", alignItems: "center", gap: 6 }}>
             ♥ {wishlist.length}
          </span>

          {/* DYNAMIC LOGIN / PROFILE LINK */}
          {user ? (
            <span onClick={() => navigate("profile")} style={{ cursor: "pointer", color: route === "profile" ? "#FF6B00" : "#FF6B00", fontWeight: 700 }}>
              Hi, {user.name.split(' ')[0]}
            </span>
          ) : (
            <span onClick={() => navigate("login")} style={{ cursor: "pointer", color: route === "login" ? "#FF6B00" : "#f5f0e8" }}>Login</span>
          )}

          <span onClick={() => navigate(ROUTES.CART)} style={{ cursor: "pointer", color: route === ROUTES.CART ? "#FF6B00" : "#f5f0e8", display: "flex", alignItems: "center", gap: 6 }}>
            Cart <div style={{ background: count > 0 ? "#FF6B00" : "#333", color: count > 0 ? "#0a0a0a" : "#888", width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{count}</div>
          </span>
        </div>

      </div>
    </nav>
  );
}