import React, { createContext, useContext, useReducer, useEffect, useState } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((i) => i.id === action.item.id);
      if (existing) return state.map((i) => i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...state, { ...action.item, qty: 1 }];
    }
    case "REMOVE": return state.filter((i) => i.id !== action.id);
    case "INC": return state.map((i) => i.id === action.id ? { ...i, qty: i.qty + 1 } : i);
    case "DEC": return state.map((i) => i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i);
    case "CLEAR": return [];
    default: return state;
  }
}

const initLocal = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => initLocal("maruthi_cart"));
  const [wishlist, setWishlist] = useState(() => initLocal("maruthi_wishlist"));
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => { localStorage.setItem("maruthi_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("maruthi_wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const enhancedDispatch = (action) => {
    dispatch(action);
    if (action.type === "ADD") {
      setToastMessage(`Added ${action.item.name} to cart!`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => prev.some(p => p.id === product.id) 
      ? prev.filter(p => p.id !== product.id) 
      : [...prev, product]
    );
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  
  return (
    <CartContext.Provider value={{ 
      cart, dispatch: enhancedDispatch, total, count, toastMessage, 
      wishlist, toggleWishlist, searchQuery, setSearchQuery 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() { return useContext(CartContext); }