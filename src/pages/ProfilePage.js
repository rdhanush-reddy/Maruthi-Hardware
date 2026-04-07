import React from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { ROUTES } from "../constants";

export function ProfilePage({ navigate }) {
  const { user, logout } = useAuth();
  const { dispatch } = useCart();
  
  // Pull past orders from local storage
  const pastOrders = JSON.parse(localStorage.getItem("maruthi_orders")) || [];

  if (!user) {
    return <div style={{ paddingTop: 150, textAlign: "center" }}><h2 style={{ color: "#FF6B00" }}>Please log in to view your profile.</h2></div>;
  }

  const handleBuyAgain = (items) => {
    // Add every item from the old order back into the cart!
    items.forEach(item => dispatch({ type: "ADD", item }));
    navigate(ROUTES.CART);
  };

  return (
    <div style={{ paddingTop: 100, maxWidth: 900, margin: "0 auto", padding: "100px 32px", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, borderBottom: "1px solid #222", paddingBottom: 20 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#f5f0e8", margin: 0 }}>My Profile</h1>
          <p style={{ color: "#FF6B00", fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>Welcome, {user.name}</p>
        </div>
        <button onClick={() => { logout(); navigate(ROUTES.HOME); }} style={{ background: "transparent", border: "1px solid #555", color: "#aaa", padding: "10px 24px", borderRadius: 20, cursor: "pointer" }}>Log Out</button>
      </div>

      <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, marginBottom: 24 }}>Order History</h2>
      
      {pastOrders.length === 0 ? (
        <p style={{ color: "#888" }}>You haven't placed any orders yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {pastOrders.map((order, index) => (
            <div key={index} style={{ background: "#111", padding: 24, borderRadius: 16, border: "1px solid #1e1e1e" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, borderBottom: "1px solid #222", paddingBottom: 16 }}>
                <span style={{ color: "#888" }}>Order Date: {order.date}</span>
                <span style={{ color: "#f5f0e8", fontWeight: "bold" }}>Total: ${order.total.toFixed(2)}</span>
              </div>
              
              <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 16 }}>
                {order.items.map(item => (
                  <div key={item.id} style={{ minWidth: 200, display: "flex", gap: 12, alignItems: "center", background: "#1a1a1a", padding: 12, borderRadius: 8 }}>
                    <img src={item.image} alt={item.name} style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover" }} />
                    <div style={{ fontSize: 12 }}>
                      <p style={{ margin: 0, color: "#f5f0e8" }}>{item.name}</p>
                      <p style={{ margin: 0, color: "#888" }}>Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button onClick={() => handleBuyAgain(order.items)} style={{ background: "#222", color: "#FF6B00", border: "1px solid #FF6B00", padding: "10px 20px", borderRadius: 20, cursor: "pointer", fontWeight: "bold" }}>
                🛒 Buy Order Again
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}