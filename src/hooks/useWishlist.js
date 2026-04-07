import { useState } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const toggle = (id) => setWishlist((w) => w.includes(id) ? w.filter((i) => i !== id) : [...w, id]);
  return { wishlist, toggle };
}