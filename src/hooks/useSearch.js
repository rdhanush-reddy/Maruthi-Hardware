import { useState } from "react";

export function useSearch(items) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = items.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchQ = p.name.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });
  return { query, setQuery, category, setCategory, filtered };
}