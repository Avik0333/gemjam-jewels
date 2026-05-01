import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowLeft, X } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useState } from "react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product, () => showToast(`${product.name} added to bag`));
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

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
          Back
        </Link>
        <div className="flex items-center gap-2">
          <Heart size={14} />
          <span className="text-xs tracking-[0.25em] uppercase">
            Wishlist ({wishlist.length})
          </span>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-8 text-center">
          <Heart size={60} strokeWidth={0.8} className="opacity-20" />
          <div>
            <p className="text-2xl tracking-wide font-light mb-2">
              Your wishlist is empty
            </p>
            <p className="text-sm opacity-40">
              Save pieces you love and come back to them anytime.
            </p>
          </div>
          <Link
            to="/"
            className="mt-4 text-xs tracking-[0.3em] uppercase border px-8 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            style={{ borderColor: "var(--text)" }}
          >
            Explore Collection
          </Link>
        </div>
      ) : (
        <section className="px-8 md:px-16 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {wishlist.map((product, i) => (
              <div
                key={product.id}
                className="group"
                style={{
                  animation: `fadeUp 0.5s ease forwards`,
                  animationDelay: `${i * 80}ms`,
                  opacity: 0,
                }}
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.img1}
                      alt={product.name}
                      className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 dark:bg-black/80 flex items-center justify-center hover:opacity-70 transition"
                  >
                    <X size={12} />
                  </button>

                  {/* Add to cart overlay */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition duration-400">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-3 text-xs tracking-[0.25em] uppercase transition ${
                        addedId === product.id
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-white/90 dark:bg-black/80 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                      }`}
                    >
                      {addedId === product.id ? "Added ✓" : "Add to Bag"}
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-sm hover:opacity-60 transition"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs opacity-50 mt-0.5">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}