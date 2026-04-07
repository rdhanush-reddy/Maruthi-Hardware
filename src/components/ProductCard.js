import React from "react";
import PropTypes from "prop-types"; // <-- IMPORTED FOR VALIDATION
import { ROUTES } from "../constants";
import { useCart } from "../context/CartContext";

export function ProductCard({ product, navigate }) {
  const { dispatch, wishlist = [], toggleWishlist } = useCart();
  const isWished = wishlist.some(p => p.id === product.id);

  return (
    <div 
      onClick={() => navigate(ROUTES.PRODUCT, product.id)}
      style={{
        background: "#111", borderRadius: 20, overflow: "hidden", cursor: "pointer",
        border: "1px solid #1e1e1e", transition: "transform 0.2s", position: "relative",
        display: "flex", flexDirection: "column"
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
        style={{ 
          position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.6)", 
          border: "1px solid #333", borderRadius: "50%", width: 36, height: 36, 
          color: isWished ? "#FF6B00" : "#fff", cursor: "pointer", zIndex: 10, 
          fontSize: 16, backdropFilter: "blur(4px)", display: "flex", 
          alignItems: "center", justifyContent: "center"
        }}
      >
        {isWished ? "♥" : "♡"}
      </button>

      <div style={{ height: 220, overflow: "hidden", background: "#1a1a1a" }}>
        <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      
      <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
        <div>
          <div style={{ color: "#666", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, fontFamily: "'Syne', sans-serif" }}>
            {product.category}
          </div>
          <h3 style={{ color: "#f5f0e8", margin: "0 0 16px", fontFamily: "'Syne', sans-serif", fontSize: 18, lineHeight: 1.3 }}>
            {product.name}
          </h3>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
          <span style={{ color: "#FF6B00", fontWeight: 700, fontSize: 22, fontFamily: "'Syne', sans-serif" }}>
            ${product.price}
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); dispatch({ type: "ADD", item: product }); }}
            style={{ 
              background: "#1a1a1a", border: "1px solid #333", color: "#f5f0e8", 
              padding: "10px 20px", borderRadius: 30, cursor: "pointer", 
              fontFamily: "'Syne', sans-serif", fontWeight: 600, transition: "all 0.2s"
            }}
            onMouseEnter={(e) => { e.target.style.background = "#FF6B00"; e.target.style.color = "#0a0a0a"; e.target.style.borderColor = "#FF6B00"; }}
            onMouseLeave={(e) => { e.target.style.background = "#1a1a1a"; e.target.style.color = "#f5f0e8"; e.target.style.borderColor = "#333"; }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

// --- PROPS VALIDATION FOR YOUR FACULTY RUBRIC ---
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  navigate: PropTypes.func.isRequired
};