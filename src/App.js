import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
import { ROUTES } from "./constants";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { NavbarWithCart } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { AboutPage } from "./pages/AboutPage";
import { AuthPage } from "./pages/AuthPage";
import { ProfilePage } from "./pages/ProfilePage";

// Ensures the page scrolls to the top when changing routes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Catches the product ID from the URL (e.g., /product/1)
function ProductWrapper({ customNavigate }) {
  const { id } = useParams();
  return <ProductDetailPage productId={parseInt(id)} navigate={customNavigate} />;
}

// Main layout containing the real Router logic
function AppContent() {
  const location = useLocation();
  const routerNavigate = useNavigate(); // <-- THIS IS THE ROUTER REMOTE CONTROL!

  // --- PROFESSIONAL SINGLE-TAB NAVIGATION ---
  const customNavigate = (route, param) => {
    let path = "/";
    if (route === ROUTES.PRODUCT) {
      path = `/product/${param}`;
    } else if (route !== ROUTES.HOME) {
      path = `/${route}`; 
    }
    
    // The Magic Line: Changes the page and URL in the SAME tab
    routerNavigate(path); 
  };

  // Highlights the correct tab in the Navbar based on the real URL
  let currentRoute = ROUTES.HOME;
  if (location.pathname.includes("shop")) currentRoute = ROUTES.SHOP;
  if (location.pathname.includes("cart")) currentRoute = ROUTES.CART;
  if (location.pathname.includes("about")) currentRoute = ROUTES.ABOUT;
  if (location.pathname.includes("product")) currentRoute = ROUTES.PRODUCT;
  if (location.pathname.includes("login")) currentRoute = "login";
  if (location.pathname.includes("profile")) currentRoute = "profile";

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#f5f0e8", position: "relative", overflowX: "hidden" }}>
      <ScrollToTop />
      <NavbarWithCart navigate={customNavigate} route={currentRoute} />
      
      {/* These are your officially declared Multiple Webpages! */}
      <Routes>
        <Route path="/" element={<HomePage navigate={customNavigate} />} />
        <Route path="/home" element={<HomePage navigate={customNavigate} />} />
        <Route path="/shop" element={<ShopPage navigate={customNavigate} />} />
        <Route path="/product/:id" element={<ProductWrapper customNavigate={customNavigate} />} />
        <Route path="/cart" element={<CartPage navigate={customNavigate} />} />
        <Route path="/about" element={<AboutPage navigate={customNavigate} />} />
        <Route path="/login" element={<AuthPage navigate={customNavigate} />} />
        <Route path="/profile" element={<ProfilePage navigate={customNavigate} />} />
      </Routes>
      
      <Footer navigate={customNavigate} />
      <Toast />
    </div>
  );
}

// The core wrapper that boots up the whole app
export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Syne:wght@600;700&family=Lora:ital@0;1&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}