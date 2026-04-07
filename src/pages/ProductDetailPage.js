import React, { useState, useEffect } from "react";
import { PRODUCTS, ROUTES } from "../constants";
import { useCart } from "../context/CartContext";
import { Badge } from "../components/Badge";
import { StarRating } from "../components/StarRating";
import { ProductCard } from "../components/ProductCard";

export function ProductDetailPage({ productId, navigate }) {
  const { dispatch } = useCart();
  const product = PRODUCTS.find(p => p.id === productId);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => { 
    document.title = product ? `${product.name} – Maruthi Hardwares` : "Maruthi Hardwares"; 
  }, [product]);

  if (!product) return <div style={{ paddingTop: 120, textAlign: "center", color: "#666" }}>Product not found.</div>;

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) dispatch({ type: "ADD", item: product });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 32px" }}>
        
        {/* Breadcrumbs */}
        <div style={{ display: "flex", gap: 8, color: "#555", fontFamily: "'Syne', sans-serif", fontSize: 12, marginBottom: 40, letterSpacing: "0.1em" }}>
          <span onClick={() => navigate(ROUTES.HOME)} style={{ cursor: "pointer", color: "#888" }}>Home</span>
          <span>/</span>
          <span onClick={() => navigate(ROUTES.SHOP)} style={{ cursor: "pointer", color: "#888" }}>Shop</span>
          <span>/</span>
          <span style={{ color: "#FF6B00" }}>{product.name}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          
          {/* Main Image */}
          <div style={{
            borderRadius: 24, height: 440, overflow: "hidden",
            border: "1px solid #2a2a2a", position: "relative", backgroundColor: "#1a1a1a"
          }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            {product.badge && <div style={{ position: "absolute", top: 20, left: 20 }}><Badge label={product.badge} /></div>}
          </div>

          {/* Product Info */}
          <div>
            <span style={{ color: "#666", fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>{product.category}</span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, color: "#f5f0e8", margin: "8px 0 16px", lineHeight: 1.1 }}>{product.name}</h1>
            
            <StarRating rating={product.rating} count={product.reviews} />

            {/* --- STOCK STATUS INDICATOR --- */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 10, 
              margin: "20px 0",
              background: "rgba(78, 205, 196, 0.1)",
              padding: "10px 16px",
              borderRadius: 12,
              width: "fit-content",
              border: "1px solid rgba(78, 205, 196, 0.2)"
            }}>
              <div style={{ 
                width: 8, 
                height: 8, 
                borderRadius: "50%", 
                background: "#4ecdc4",
                boxShadow: "0 0 12px #4ecdc4",
                animation: "pulse 2s infinite" // Visual cue for "live" status
              }}></div>
              <span style={{ 
                fontSize: 12, 
                color: "#4ecdc4", 
                fontWeight: 700, 
                fontFamily: "'Syne', sans-serif", 
                textTransform: "uppercase",
                letterSpacing: "0.05em" 
              }}>
                In Stock — Ready for Dispatch
              </span>
            </div>

            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, fontWeight: 700, color: "#FF6B00", marginBottom: 32 }}>
              ${product.price}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", background: "#1a1a1a", borderRadius: 32, border: "1px solid #2a2a2a", overflow: "hidden" }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ background: "none", border: "none", color: "#aaa", width: 40, height: 40, cursor: "pointer", fontSize: 18 }}>−</button>
                <span style={{ color: "#f5f0e8", fontFamily: "'Syne', sans-serif", fontWeight: 700, width: 32, textAlign: "center" }}>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} style={{ background: "none", border: "none", color: "#aaa", width: 40, height: 40, cursor: "pointer", fontSize: 18 }}>+</button>
              </div>
              <button onClick={handleAdd} style={{
                flex: 1, background: added ? "#4ecdc4" : "#FF6B00", border: "none",
                borderRadius: 32, padding: "14px 28px", fontFamily: "'Syne', sans-serif",
                fontSize: 14, fontWeight: 700, cursor: "pointer", color: "#0a0a0a",
                letterSpacing: "0.08em", transition: "all 0.2s"
              }}>
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
            </div>

            <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 16, padding: 24 }}>
              {[["Brand", "Premium Quality"], ["Material", "Industrial Grade"], ["Warranty", "1 Year"], ["Ships In", "24-48 Hours"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #1e1e1e" }}>
                  <span style={{ color: "#555", fontFamily: "'Syne', sans-serif", fontSize: 13 }}>{k}</span>
                  <span style={{ color: "#aaa", fontFamily: "'Syne', sans-serif", fontSize: 13 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div style={{ marginTop: 80 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "#f5f0e8", marginBottom: 32 }}>More in {product.category}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
              {related.map(p => <ProductCard key={p.id} product={p} navigate={navigate} wishlist={[]} toggleWishlist={() => {}} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}