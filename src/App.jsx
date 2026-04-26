import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import VideoStrip from "./components/VideoStrip";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div
      className="pt-[70px]"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Navbar />
      <Hero />
      <Categories />
      <VideoStrip />
      <ProductGrid />
      <Carousel />
      <Footer />
    </div>
  );
}