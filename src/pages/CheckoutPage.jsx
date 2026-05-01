import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [orderNum] = useState(() =>
    Math.floor(100000 + Math.random() * 900000)
  );

  // Confirm on mount + clear cart
  useEffect(() => {
    setTimeout(() => setConfirmed(true), 400);
    clearCart();
  }, []);

  return (
    <div
      className="min-h-screen pt-[70px] flex items-center justify-center px-8"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-md w-full text-center">

        {/* Animated checkmark */}
        <div
          className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto mb-10 transition-all duration-700 ${
            confirmed ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{ borderColor: "var(--text)" }}
        >
          <Check size={32} strokeWidth={1.2} />
        </div>

        <p className="text-xs tracking-[0.4em] uppercase opacity-40 mb-3">
          Order Confirmed
        </p>
        <h1 className="text-3xl md:text-4xl tracking-wide font-light mb-4">
          Thank you!
        </h1>
        <p className="text-sm opacity-50 leading-relaxed mb-2">
          Your order <span className="opacity-100 font-medium">#{orderNum}</span> has been placed.
        </p>
        <p className="text-sm opacity-50 leading-relaxed mb-10">
          You'll receive a confirmation email shortly.
        </p>

        {/* Divider */}
        <div
          className="h-px w-full mb-10"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Order summary */}
        <div className="text-left mb-10 space-y-2">
          <p className="text-xs tracking-[0.25em] uppercase opacity-40 mb-4">
            Order Summary
          </p>
          {cartItems.length === 0 ? (
            <p className="text-xs opacity-40">Items cleared after confirmation.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="opacity-70">{item.name} × {item.qty}</span>
                <span>₹{(item.priceNum * item.qty).toLocaleString("en-IN")}</span>
              </div>
            ))
          )}
          <div
            className="flex justify-between text-sm pt-4 mt-4 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="text-xs tracking-[0.2em] uppercase">Total Paid</span>
            <span>₹{totalPrice > 0 ? totalPrice.toLocaleString("en-IN") : "—"}</span>
          </div>
        </div>

        <Link
          to="/"
          className="block w-full py-4 text-xs tracking-[0.35em] uppercase bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}