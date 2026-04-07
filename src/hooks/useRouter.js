import { useState, useCallback } from "react";
import { ROUTES } from "../constants";

export function useRouter() {
  const [route, setRoute] = useState(ROUTES.HOME);
  const [param, setParam] = useState(null);
  const navigate = useCallback((r, p = null) => { setRoute(r); setParam(p); window.scrollTo(0, 0); }, []);
  return { route, param, navigate };
}