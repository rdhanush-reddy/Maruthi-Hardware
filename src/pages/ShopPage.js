import React, { useState } from "react";
import { PRODUCTS, CATEGORIES, ROUTES } from "../constants";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export function ShopPage({ navigate }) {
  // We only need the searchQuery here. Wishlist logic is handled inside ProductCard!
  const { searchQuery } = useCart(); 
  const [activeCat, setActiveCat] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // --- Filtering Logic (Categories + Live Search) ---
  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCat === "All" || p.category === activeCat;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // --- Sorting Logic ---
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div style={{ paddingTop: 80, minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
      
      {/* Header Section */}
      <div style={{ padding: "80px 32px 40px", textAlign: "center" }}>
        <h1 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: "clamp(32px, 5vw, 48px)", 
          color: "#f5f0e8", 
          marginBottom: 16 
        }}>
          {searchQuery ? `Results for "${searchQuery}"` : "The Hardware Edit"}
        </h1>
        {!searchQuery && (
          <p style={{ 
            fontFamily: "'Syne', sans-serif", color: "#666", fontSize: 14, 
            textTransform: "uppercase", letterSpacing: "0.2em" 
          }}>
            Our Full Collection
          </p>
        )}
      </div>

      {/* Toolbar: Categories & Sorting */}
      <div style={{ 
        maxWidth: 1200, margin: "0 auto", padding: "0 32px 40px", 
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 
      }}>
        
        {/* Category Tabs */}
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 10 }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: "10px 20px", borderRadius: 20,
                border: activeCat === cat ? "1px solid #FF6B00" : "1px solid #2a2a2a",
                background: activeCat === cat ? "#FF6B00" : "transparent",
                color: activeCat === cat ? "#0a0a0a" : "#888",
                fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 600,
                cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            background: "#111", color: "#aaa", border: "1px solid #2a2a2a",
            padding: "10px 16px", borderRadius: 12, fontFamily: "'Syne', sans-serif",
            fontSize: 13, outline: "none"
          }}
        >
          <option value="default">Sort By: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Cleaned Up Product Grid */}
      <div style={{ 
        maxWidth: 1200, margin: "0 auto", padding: "0 32px 100px", 
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 32 
      }}>
        {sorted.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            navigate={navigate} 
          />
        ))}
      </div>

      {/* No Results State */}
      {sorted.length === 0 && (
        <div style={{ textAlign: "center", padding: "100px 0", color: "#555" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 18 }}>No items found matching your search.</p>
        </div>
      )}
    </div>
  );
}