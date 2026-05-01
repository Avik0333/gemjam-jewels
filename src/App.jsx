import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import VideoStrip from "./components/VideoStrip";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ToastProvider } from "./context/ToastContext";
import CheckoutPage from "./pages/CheckoutPage";
import { WishlistProvider } from "./context/WishlistContext";
import WishlistPage from "./pages/WishlistPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <VideoStrip />
      <ProductGrid />
      <Carousel />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <div className="pt-[70px]" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
            <Navbar />
            <CartDrawer />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/wishlist" element={<WishlistPage />} /> 
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </div>
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  );
}