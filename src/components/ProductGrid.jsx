import { useState } from "react";

export default function ProductGrid() {
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);

  const products = [
    {
      name: "Gold Chain Necklace",
      price: "₹2,499",
      img1: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
      img2: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800",
    },
    {
      name: "Minimal Ring",
      price: "₹999",
      img1: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800",
      img2: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=800",
    },
    {
      name: "Pearl Earrings",
      price: "₹1,499",
      img1: "https://images.unsplash.com/photo-1704957205327-9fbd44d683b7?q=80&w=1289",
      img2: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=800",
    },
    {
      name: "Charm Bracelet",
      price: "₹1,999",
      img1: "https://images.unsplash.com/photo-1602752250015-52934bc45613?q=80&w=800",
      img2: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800",
    },
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log("Cart:", [...cart, product]);
  };

  return (
    <section id="shop" className="w-full px-8 md:px-16 py-20">

      {/* HEADER */}
      <div className="mb-16 flex justify-between items-end">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase opacity-60">
            Shop
          </p>
          <h2 className="text-3xl mt-3 tracking-wide">
            Featured Pieces
          </h2>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((product, i) => (
          <div key={i} className="group cursor-pointer">

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={product.img1}
                className="w-full aspect-[3/4] object-cover transition duration-500 group-hover:opacity-0"
              />

              <img
                src={product.img2}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-3">

                <button
                  onClick={() => setSelected(product)}
                  className="text-xs tracking-[0.3em] uppercase border border-white px-4 py-2 text-white hover:bg-white hover:text-black transition"
                >
                  Quick View
                </button>

                <button
                  onClick={() => addToCart(product)}
                  className="text-xs tracking-[0.3em] uppercase border border-white px-4 py-2 text-white hover:bg-white hover:text-black transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

            {/* TEXT */}
            <div className="mt-3">
              <p className="text-sm">{product.name}</p>
              <p className="text-xs opacity-60">{product.price}</p>
            </div>

          </div>
        ))}

      </div>

      {/* QUICK VIEW (simple, no shadcn) */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* MODAL */}
          <div className="relative bg-white text-black w-[90%] max-w-4xl rounded-lg overflow-hidden shadow-2xl animate-[fadeIn_0.3s_ease]">

            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-sm z-10 hover:opacity-60"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={selected.img1}
                  className="w-full h-full object-cover scale-105 transition duration-700 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center">

                <h3 className="text-2xl mb-3 tracking-wide">
                  {selected.name}
                </h3>

                <p className="text-sm opacity-60 mb-6">
                  {selected.price}
                </p>

                <p className="text-sm opacity-70 mb-8 leading-relaxed">
                  Handcrafted piece designed for elegance and everyday luxury.
                </p>

                <button className="border py-3 uppercase tracking-wider hover:bg-black hover:text-white transition">
                  Add to Cart
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}