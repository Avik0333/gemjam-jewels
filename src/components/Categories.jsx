import { Link } from "react-router-dom";

export default function Categories() {
  const items = [
    {
      title: "Rings",
      slug: "rings",
      img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ,
    },
    {
      title: "Necklaces",
      slug: "necklaces",
      img: "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ,
    },
    {
      title: "Earrings",
      slug: 'earrings',
      img: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  return (
    <section id="collections" className="w-full px-8 md:px-16 py-28">

      {/* HEADER */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase opacity-60">
          Collections
        </p>
        <h2 className="text-4xl tracking-wide mt-4">
          Explore Categories
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT BIG */}
        <div className="md:col-span-2 relative group overflow-hidden h-full">
          <div className="h-full min-h-150">
            <img
              src={items[0].img}
              alt={items[0].title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex flex-col justify-end p-6">

            <h3 className="text-white text-lg tracking-wide transition-all duration-300 group-hover:-translate-y-2">
              {items[0].title}
            </h3>

            <Link to={`/category/${items[0].slug}`}>
              <button className="text-xs tracking-[0.3em] uppercase border px-4 py-2 hover:bg-black hover:text-white transition">
                Shop Now →
              </button>
            </Link>

          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="grid grid-rows-2 gap-8 h-full">

          {items.slice(1, 3).map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <div className="h-full min-h-[220px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex flex-col justify-end p-6">

                  <h3 className="text-white text-lg tracking-wide transition-all duration-300 group-hover:-translate-y-2">
                    {item.title}
                  </h3>

                  <Link to={`/category/${item.slug}`}>
                    <button className="text-xs tracking-[0.3em] uppercase border px-4 py-2 hover:bg-black hover:text-white transition">
                      Shop Now →
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}