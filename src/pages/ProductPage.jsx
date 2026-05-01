import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Star, ShoppingBag, Check, Heart } from "lucide-react";
import { getProductById, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useWishlist } from "../context/WishlistContext";

const REVIEWS = [
  { name: "Priya S.", rating: 5, text: "Absolutely gorgeous! The quality exceeded my expectations. Wearing it every day.", date: "2 weeks ago" },
  { name: "Ananya M.", rating: 4, text: "Beautiful piece. Packaging was lovely too. Shipped fast.", date: "1 month ago" },
  { name: "Rhea K.", rating: 5, text: "Got compliments the very first day I wore it. Will order again!", date: "1 month ago" },
];

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ ALL hooks first — before any conditional logic
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  // ✅ Data lookup AFTER hooks
  const product = getProductById(id);

  if (!product) {
    navigate("/404", { replace: true });
    return null;
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const images = [product.img1, product.img2];
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, () => showToast(`${product.name} added to bag`));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    showToast(
      wishlisted
        ? `${product.name} removed from wishlist`
        : `${product.name} saved to wishlist`
    );
  };

  return (
    <div
      className="min-h-screen pt-[70px] page-enter"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* BREADCRUMB */}
      <div
        className="px-8 md:px-16 py-5 border-b flex items-center gap-3"
        style={{ borderColor: "var(--border)" }}
      >
        <Link
          to={`/category/${product.category}`}
          className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition"
        >
          <ArrowLeft size={13} />
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <span className="opacity-30 text-xs">/</span>
        <span className="text-xs tracking-[0.2em] opacity-70 truncate max-w-[200px]">
          {product.name}
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-8 md:px-16 py-12 grid md:grid-cols-2 gap-16 max-w-[1200px] mx-auto">

        {/* LEFT: IMAGES */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-20 overflow-hidden border-2 transition ${
                  activeImg === i ? "border-current opacity-100" : "border-transparent opacity-40"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              key={activeImg}
              src={images[activeImg]}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover"
              style={{ animation: "fadeIn 0.4s ease" }}
            />
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col justify-center">
          <p className="text-xs tracking-[0.35em] uppercase opacity-50 mb-4">
            {product.category}
          </p>
          <h1 className="text-3xl md:text-4xl tracking-wide font-light mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={i < Math.floor(product.rating) ? "fill-current" : "opacity-20"}
                />
              ))}
            </div>
            <span className="text-xs opacity-50">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="text-2xl tracking-wide mb-6">{product.price}</p>
          <p className="text-sm opacity-60 leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="h-px mb-8" style={{ backgroundColor: "var(--border)" }} />

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs tracking-[0.35em] uppercase transition-all duration-300 ${
                added
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              }`}
              style={{ borderColor: "var(--text)" }}
            >
              {added ? <><Check size={14} /> Added to Bag</> : <><ShoppingBag size={14} /> Add to Bag</>}
            </button>

            <button
              onClick={handleWishlist}
              className="w-14 flex items-center justify-center border transition-all duration-300 hover:opacity-60"
              style={{ borderColor: "var(--text)" }}
            >
              <Heart
                size={16}
                className={`transition-all duration-300 ${wishlisted ? "fill-current" : ""}`}
              />
            </button>
          </div>

          <div className="mt-8 space-y-2">
            {["Free shipping on orders above ₹2,000", "Easy 15-day returns", "Handcrafted & quality-checked"].map((note) => (
              <p key={note} className="text-xs opacity-40 flex items-center gap-2">
                <span>—</span> {note}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <section className="px-8 md:px-16 py-16 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">Reviews</p>
          <h2 className="text-2xl tracking-wide font-light mb-10">What customers say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-6 border" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={11} className={j < r.rating ? "fill-current" : "opacity-20"} />
                  ))}
                </div>
                <p className="text-sm opacity-70 leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-wide">{r.name}</p>
                  <p className="text-xs opacity-40">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="px-8 md:px-16 py-16 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-2">More from {product.category}</p>
            <h2 className="text-2xl tracking-wide font-light mb-10">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="relative overflow-hidden">
                    <img src={p.img1} alt={p.name} className="w-full aspect-[3/4] object-cover transition duration-700 group-hover:opacity-0" />
                    <img src={p.img2} alt={p.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-700 group-hover:opacity-100" />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm">{p.name}</p>
                    <p className="text-xs opacity-50 mt-0.5">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}