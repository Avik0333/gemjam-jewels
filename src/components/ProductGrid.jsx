import { Link } from "react-router-dom";
import { useState } from "react";
import { Heart } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useWishlist } from "../context/WishlistContext";

export default function ProductGrid() {
  const [addedId, setAddedId] = useState(null);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const featured = products.slice(0, 4);

  const handleAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, () => showToast(`${product.name} added to bag`));
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleWishlist = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    showToast(
      isWishlisted(product.id)
        ? `${product.name} removed from wishlist`
        : `${product.name} saved to wishlist`
    );
  };

  return (
    <section id="shop" className="w-full px-8 md:px-16 py-20">
      <div className="mb-16 flex justify-between items-end">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase opacity-60">Shop</p>
          <h2 className="text-3xl mt-3 tracking-wide">Featured Pieces</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((product, i) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group cursor-pointer card-reveal"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={product.img1}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:opacity-0"
              />
              <img
                src={product.img2}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
              />

              {/* WISHLIST HEART */}
              <button
                onClick={(e) => handleWishlist(e, product)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              >
                <Heart
                  size={13}
                  className={`transition-all duration-300 ${
                    isWishlisted(product.id) ? "fill-current" : ""
                  }`}
                />
              </button>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-3">
                <span className="text-xs tracking-[0.3em] uppercase border border-white/60 px-4 py-2 text-white">
                  View Details
                </span>
                <button
                  onClick={(e) => handleAdd(e, product)}
                  className={`text-xs tracking-[0.3em] uppercase border px-4 py-2 transition ${
                    addedId === product.id
                      ? "bg-white text-black border-white"
                      : "border-white text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {addedId === product.id ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm">{product.name}</p>
              <p className="text-xs opacity-60">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}