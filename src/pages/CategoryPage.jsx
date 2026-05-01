import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Star, Heart } from "lucide-react";
import { getProductsByCategory, getCategoryBySlug } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useWishlist } from "../context/WishlistContext";

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);
  const { showToast } = useToast();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    navigate("/404", { replace: true });
    return null;
  }

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
    <div
      className="min-h-screen pt-[70px] page-enter"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* HERO BANNER */}
      <div className="relative h-[38vh] overflow-hidden">
        <img
          src={category.img}
          alt={category.title}
          className="w-full h-full object-cover scale-105"
          style={{ animation: "zoomOut 1.2s ease-out forwards" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-8">
          <p className="text-xs tracking-[0.4em] uppercase opacity-70 mb-3">
            Collection
          </p>
          <h1 className="text-5xl md:text-6xl tracking-wide font-light mb-4">
            {category.title}
          </h1>
          <p className="text-sm opacity-60 max-w-md">{category.description}</p>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div
        className="px-8 md:px-16 py-5 border-b flex items-center gap-3"
        style={{ borderColor: "var(--border)" }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition"
        >
          <ArrowLeft size={13} />
          Home
        </Link>
        <span className="opacity-30 text-xs">/</span>
        <span className="text-xs tracking-[0.2em] uppercase opacity-80">
          {category.title}
        </span>
        <span className="ml-auto text-xs opacity-40">
          {products.length} pieces
        </span>
      </div>

      {/* PRODUCT GRID */}
      <section className="px-8 md:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group cursor-pointer card-reveal"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* IMAGE */}
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
                  <span className="text-xs tracking-[0.3em] uppercase text-white border border-white/60 px-4 py-2">
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

              {/* TEXT */}
              <div className="mt-3">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "opacity-20"
                      }
                    />
                  ))}
                  <span className="text-[10px] opacity-50 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-sm">{product.name}</p>
                <p className="text-xs opacity-60 mt-0.5">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}