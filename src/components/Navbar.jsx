import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, ShoppingBag, Heart } from "lucide-react";
import logo from "../assets/logo.png";
import {useCart} from "../context/CartContext"
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const theme = useContext(ThemeContext);
  const { totalItems, setDrawerOpen } = useCart();
  if (!theme) return null; // 🔥 prevents crash
  const { dark, toggleTheme } = theme;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlist } = useWishlist();

  const navItems = [
    { label: "Collections", href: "#collections" },
    { label: "Shop", href: "#shop" },
    { label: "Contact", href: "#contact" },
  ];

  // scroll blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock background scroll when menu open
  /* trunk-ignore(eslint/react-hooks/rules-of-hooks) */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-md border-b"
            : "bg-transparent"
        }`}
        style={{
          borderColor: scrolled ? "var(--border)" : "transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">

          {/* LEFT: LOGO */}
          <a href="#home" className="flex items-center gap-2 min-w-0">
            <img
              src={logo}
              alt="Gem Jam"
              className="h-7 w-7 md:h-8 md:w-8 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase whitespace-nowrap">
              Gem Jam Jewels
            </span>
          </a>

          {/* CENTER (ABSOLUTE) */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-xs tracking-[0.25em] uppercase">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:opacity-60">
                {item.label}

                {/* underline */}
                <span className="absolute left-1/2 -bottom-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* THEME TOGGLE - keep as is */}
            <button
              onClick={toggleTheme}
              className="relative h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              <Sun className={`h-4 w-4 transition-all duration-300 ${dark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
              <Moon className={`absolute h-4 w-4 transition-all duration-300 ${dark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
            </button>

            {/* CART ICON */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              <ShoppingBag className="h-4 w-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-[9px] flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="relative h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              <Heart className="h-4 w-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-[9px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON - keep as is */}
            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu size={18} />
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU (PORTAL) */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] bg-black text-white">

            {/* CLOSE */}
            <div className="flex justify-end p-6 border-b border-white/10">
              <button onClick={() => setOpen(false)}>
                <X size={26} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col items-center justify-center h-[80vh] gap-10 text-lg tracking-[0.3em] uppercase">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:opacity-60"
                >
                  {item.label}
                </a>
              ))}
            </div>

          </div>,
          document.body
        )}
    </>
  );
}