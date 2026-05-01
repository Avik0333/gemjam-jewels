import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQty, totalItems, totalPrice, clearCart } =
    useCart();

  const shipping = totalPrice >= 2000 ? 0 : 149;
  const grandTotal = totalPrice + shipping;

  return (
    <div
      className="min-h-screen pt-[70px] page-enter"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* HEADER */}
      <div
        className="px-8 md:px-16 py-5 border-b flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition"
        >
          <ArrowLeft size={13} />
          Continue Shopping
        </Link>
        <div className="flex items-center gap-2">
          <ShoppingBag size={14} />
          <span className="text-xs tracking-[0.25em] uppercase">
            Your Bag ({totalItems})
          </span>
        </div>
      </div>

      {cartItems.length === 0 ? (
        /* EMPTY STATE */
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-8 text-center">
          <ShoppingBag size={60} strokeWidth={0.8} className="opacity-20" />
          <div>
            <p className="text-2xl tracking-wide font-light mb-2">
              Your bag is empty
            </p>
            <p className="text-sm opacity-40">
              Looks like you haven't added anything yet.
            </p>
          </div>
          <Link
            to="/"
            className="mt-4 text-xs tracking-[0.3em] uppercase border px-8 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            style={{ borderColor: "var(--text)" }}
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="px-8 md:px-16 py-12 max-w-[1200px] mx-auto grid md:grid-cols-[1fr_360px] gap-16">

          {/* LEFT: ITEMS */}
          <div>
            {/* Column headers */}
            <div
              className="hidden md:grid grid-cols-[auto_1fr_auto_auto] gap-4 pb-4 mb-6 border-b text-xs tracking-[0.25em] uppercase opacity-40"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="w-20" />
              <span>Product</span>
              <span className="text-center">Qty</span>
              <span className="text-right">Total</span>
            </div>

            {/* Items */}
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid md:grid-cols-[auto_1fr_auto_auto] gap-4 items-center pb-8 border-b last:border-b-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Image */}
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.img1}
                      alt={item.name}
                      className="w-20 h-24 object-cover hover:opacity-80 transition"
                    />
                  </Link>

                  {/* Info */}
                  <div>
                    <Link
                      to={`/product/${item.id}`}
                      className="text-sm tracking-wide hover:opacity-60 transition"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs opacity-50 mt-1">{item.price} / piece</p>
                  </div>

                  {/* Qty */}
                  <div
                    className="flex items-center border"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="px-3 py-2 hover:opacity-60 transition"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-3 text-sm min-w-[2rem] text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-3 py-2 hover:opacity-60 transition"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Total + remove */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm tracking-wide">
                      ₹{(item.priceNum * item.qty).toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="hover:opacity-60 transition"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="mt-6 text-xs tracking-[0.2em] uppercase opacity-40 hover:opacity-100 transition"
            >
              Clear Bag
            </button>
          </div>

          {/* RIGHT: SUMMARY */}
          <div>
            <div
              className="border p-8 space-y-5 sticky top-[90px]"
              style={{ borderColor: "var(--border)" }}
            >
              <h2 className="text-sm tracking-[0.25em] uppercase mb-6">
                Order Summary
              </h2>

              {/* Lines */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-60">
                    Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
                  </span>
                  <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 dark:text-green-400">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs opacity-40">
                    Add ₹{(2000 - totalPrice).toLocaleString("en-IN")} more for free shipping
                  </p>
                )}
              </div>

              <div
                className="h-px"
                style={{ backgroundColor: "var(--border)" }}
              />

              <div className="flex justify-between font-medium">
                <span className="text-xs tracking-[0.2em] uppercase">Total</span>
                <span className="text-lg">
                  ₹{grandTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full text-center py-4 text-xs tracking-[0.35em] uppercase bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
              >
                Proceed to Checkout
              </Link>

              <p className="text-xs opacity-30 text-center">
                Taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}