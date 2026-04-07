import React, { useState } from "react";
import { ROUTES } from "../constants";
import { useCart } from "../context/CartContext";

export function CartPage({ navigate }) {
  const { cart, dispatch, total, count } = useCart();
  const [step, setStep] = useState("cart"); 
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastOrder, setLastOrder] = useState(null); 

  // --- SUBMIT LOGIC (Now saves to Order History!) ---
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      
      const newOrder = { items: [...cart], total, date: new Date().toLocaleDateString() };
      setLastOrder(newOrder); 
      
      // Save order to history for the Profile Page
      const pastOrders = JSON.parse(localStorage.getItem("maruthi_orders")) || [];
      localStorage.setItem("maruthi_orders", JSON.stringify([newOrder, ...pastOrders]));

      setStep("success");
      dispatch({ type: "CLEAR" });
    }, 2000);
  };

  const downloadInvoice = () => {
    if (!lastOrder) return;
    const printWindow = window.open('', '', 'width=800,height=800');
    printWindow.document.write(`
      <html><head><title>Invoice - Maruthi Hardwares</title></head>
      <body style="font-family: Arial, sans-serif; padding: 40px; color: #111; max-width: 800px; margin: 0 auto;">
        <h1 style="color: #FF6B00; margin-bottom: 5px;">Maruthi Hardwares</h1>
        <p style="margin: 0 0 40px; color: #555;">123 Main Bazaar Road, Guntur, AP - 522237<br/>Date: ${lastOrder.date}</p>
        <h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">Tax Invoice</h3>
        <table style="width: 100%; text-align: left; border-collapse: collapse; margin-bottom: 30px;">
          <tr style="background: #f9f9f9;">
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Item Description</th>
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Qty</th>
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Price</th>
          </tr>
          ${lastOrder.items.map(item => `
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.name}</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.qty}</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">$${(item.price * item.qty).toFixed(2)}</td>
            </tr>
          `).join('')}
        </table>
        <h2 style="text-align: right; color: #FF6B00; font-size: 28px;">Total: $${lastOrder.total.toFixed(2)}</h2>
        <p style="text-align: center; margin-top: 80px; color: #888; font-size: 12px;">This is a computer-generated invoice.</p>
        <script>window.onload = () => { window.print(); window.close(); }</script>
      </body></html>
    `);
    printWindow.document.close();
  };

  // 1. SUCCESS VIEW
  if (step === "success") {
    return (
      <div style={{ paddingTop: 80, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
        <div style={{ fontSize: 100, marginBottom: 20 }}>✅</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 42, color: "#f5f0e8" }}>Order Placed!</h2>
        <p style={{ color: "#888", fontSize: 18, maxWidth: 500, fontFamily: "'Syne', sans-serif", marginBottom: 30 }}>
          Thank you for trusting Maruthi Hardwares. Your tools are being prepared for dispatch.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <button onClick={downloadInvoice} style={{ background: "transparent", border: "1px solid #FF6B00", padding: "16px 32px", borderRadius: 40, fontWeight: 700, cursor: "pointer", color: "#FF6B00", textTransform: "uppercase" }}>
            📄 Download Invoice
          </button>
          <button onClick={() => navigate(ROUTES.SHOP)} style={{ background: "#FF6B00", border: "none", padding: "16px 32px", borderRadius: 40, fontWeight: 700, cursor: "pointer", color: "#0a0a0a", textTransform: "uppercase" }}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // 2. EMPTY CART VIEW
  if (cart.length === 0 && step === "cart") {
    return (
      <div style={{ paddingTop: 80, minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 100, marginBottom: 24, opacity: 0.5 }}>🛒</div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", color: "#f5f0e8" }}>Your cart is empty</h2>
        <button onClick={() => navigate(ROUTES.SHOP)} style={{ background: "#FF6B00", border: "none", padding: "16px 40px", borderRadius: 40, fontWeight: 700, cursor: "pointer", marginTop: 20, color: "#0a0a0a" }}>
          Start Shopping
        </button>
      </div>
    );
  }

  // 3. SECURE CHECKOUT VIEW
  if (step === "payment") {
    return (
      <div style={{ paddingTop: 100, minHeight: "100vh", maxWidth: 1000, margin: "0 auto", padding: "0 32px" }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, color: "#f5f0e8", marginBottom: 40 }}>Secure Checkout</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 40 }}>
          
          <form onSubmit={handlePaymentSubmit} style={{ background: "#111", padding: 32, borderRadius: 20, border: "1px solid #1e1e1e" }}>
            <h3 style={{ color: "#f5f0e8", marginBottom: 24, fontFamily: "'Syne', sans-serif" }}>Select Payment Method</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
              {["upi", "card", "cod"].map(m => (
                <button type="button" key={m} onClick={() => setPaymentMethod(m)} style={{
                  flex: 1, padding: 12, borderRadius: 12, cursor: "pointer",
                  background: paymentMethod === m ? "#FF6B00" : "#1a1a1a",
                  color: paymentMethod === m ? "#0a0a0a" : "#aaa", 
                  border: "none", fontWeight: 700, textTransform: "uppercase", fontSize: 12
                }}>{m === 'upi' ? 'UPI' : m === 'card' ? 'Debit/Credit' : 'COD'}</button>
              ))}
            </div>

            <div style={{ marginBottom: 32 }}>
              {paymentMethod === "upi" && (
                <div>
                  <label style={{ display: "block", color: "#888", marginBottom: 8, fontSize: 13 }}>Enter UPI ID</label>
                  <input required type="text" placeholder="yourname@okhdfcbank" style={{ width: "100%", padding: 14, borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
                </div>
              )}
              {paymentMethod === "card" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", color: "#888", marginBottom: 8, fontSize: 13 }}>Card Number</label>
                    <input required type="text" placeholder="0000 0000 0000 0000" style={{ width: "100%", padding: 14, borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", color: "#888", marginBottom: 8, fontSize: 13 }}>Expiry Date</label>
                      <input required type="text" placeholder="MM/YY" style={{ width: "100%", padding: 14, borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#888", marginBottom: 8, fontSize: 13 }}>CVV</label>
                      <input required type="password" placeholder="123" maxLength="3" style={{ width: "100%", padding: 14, borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#fff", outline: "none" }} />
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === "cod" && (
                <div style={{ padding: 20, background: "#1a1a1a", borderRadius: 8, border: "1px solid #333" }}>
                  <p style={{ color: "#aaa", margin: 0, fontSize: 14 }}>Pay in cash to the delivery agent when your order arrives.</p>
                </div>
              )}
            </div>

            <button type="submit" disabled={isProcessing} style={{ width: "100%", background: isProcessing ? "#333" : "#FF6B00", color: "#0a0a0a", padding: 18, borderRadius: 40, border: "none", fontWeight: 800, cursor: "pointer", textTransform: "uppercase" }}>
              {isProcessing ? "Processing Security..." : `Confirm Payment — $${total.toFixed(2)}`}
            </button>
          </form>

          <div style={{ background: "#111", padding: 24, borderRadius: 20, border: "1px solid #1e1e1e", height: "fit-content" }}>
            <h4 style={{ color: "#555", textTransform: "uppercase", fontSize: 12, marginBottom: 20, letterSpacing: "0.1em" }}>Order Summary</h4>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, fontWeight: 700, color: "#FF6B00", fontFamily: "'Syne', sans-serif" }}>
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. MAIN CART ITEMS VIEW
  return (
    <div style={{ paddingTop: 100, maxWidth: 1000, margin: "0 auto", padding: "0 32px 100px" }}>
      <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 44, color: "#f5f0e8", marginBottom: 40 }}>Your Shopping Cart</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 40 }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cart.map(item => (
            <div key={item.id} style={{ background: "#111", padding: 20, borderRadius: 16, display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #1e1e1e" }}>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <img src={item.image} alt={item.name} style={{ width: 70, height: 70, borderRadius: 12, objectFit: "cover", background: "#1a1a1a" }} />
                <div>
                  <h4 style={{ margin: "0 0 4px", color: "#f5f0e8", fontFamily: "'Syne', sans-serif" }}>{item.name}</h4>
                  <p style={{ margin: 0, color: "#FF6B00", fontWeight: 700, fontSize: 18 }}>${item.price}</p>
                </div>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, background: "#1a1a1a", padding: "6px 16px", borderRadius: 30, border: "1px solid #333" }}>
                  <button onClick={() => dispatch({ type: "DEC", id: item.id })} style={{ background: "none", border: "none", color: "#FF6B00", fontSize: 22, cursor: "pointer", fontWeight: 700 }}>−</button>
                  <span style={{ color: "#fff", fontWeight: 700, width: 20, textAlign: "center", fontFamily: "'Syne', sans-serif" }}>{item.qty}</span>
                  <button onClick={() => dispatch({ type: "INC", id: item.id })} style={{ background: "none", border: "none", color: "#FF6B00", fontSize: 22, cursor: "pointer", fontWeight: 700 }}>+</button>
                </div>
                <button onClick={() => dispatch({ type: "REMOVE", id: item.id })} style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: 20 }}>✕</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#111", padding: 32, borderRadius: 24, border: "1px solid #1e1e1e", height: "fit-content", position: "sticky", top: 120 }}>
          <h3 style={{ color: "#f5f0e8", fontSize: 18, marginBottom: 24, fontFamily: "'Syne', sans-serif" }}>Cart Summary</h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <span style={{ color: "#666" }}>Subtotal</span><span style={{ color: "#f5f0e8" }}>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32, borderTop: "1px solid #222", paddingTop: 20 }}>
            <span style={{ color: "#f5f0e8", fontWeight: 700 }}>Total</span><span style={{ color: "#FF6B00", fontWeight: 800, fontSize: 24 }}>${total.toFixed(2)}</span>
          </div>
          <button onClick={() => setStep("payment")} style={{ width: "100%", background: "#FF6B00", padding: "18px", borderRadius: 40, border: "none", fontWeight: 800, cursor: "pointer", color: "#0a0a0a", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}