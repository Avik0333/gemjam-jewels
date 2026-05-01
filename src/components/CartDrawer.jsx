import { createPortal } from "react-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { cartItems, drawerOpen, setDrawerOpen, removeFromCart, updateQty, totalItems, totalPrice } = useCart();

  if (!drawerOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[99998] flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div
        className="absolute right-0 top-0 h-full w-full max-w-[420px] flex flex-col shadow-2xl"
        style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="text-xs tracking-[0.25em] uppercase">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="hover:opacity-60 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 opacity-50">
              <ShoppingBag size={40} strokeWidth={1} />
              <p className="text-xs tracking-[0.2em] uppercase">Your bag is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.img1}
                  alt={item.name}
                  className="w-20 h-24 object-cover flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm tracking-wide">{item.name}</p>
                    <p className="text-xs opacity-50 mt-1">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* Qty */}
                    <div
                      className="flex items-center border"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="px-2 py-1 hover:opacity-60 transition"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 text-xs">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-2 py-1 hover:opacity-60 transition"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs opacity-40 hover:opacity-100 transition tracking-wider uppercase"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div
            className="px-6 py-6 border-t space-y-4"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs tracking-[0.2em] uppercase opacity-60">Subtotal</span>
              <span className="text-sm tracking-wide">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <Link
              to="/cart"
              onClick={() => setDrawerOpen(false)}
              className="block w-full text-center py-3 text-xs tracking-[0.3em] uppercase border hover:bg-current transition"
              style={{ borderColor: "var(--text)" }}
            >
              <span
                className="block hover:opacity-0"
                style={{ mixBlendMode: "normal" }}
              >
                View Cart
              </span>
            </Link>
            <button className="w-full py-3 text-xs tracking-[0.3em] uppercase bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}