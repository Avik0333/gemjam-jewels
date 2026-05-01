// src/data/products.js
// Central source of truth for all products

export const products = [
  // RINGS
  {
    id: "r1",
    name: "Minimal Ring",
    category: "rings",
    priceNum: 999,
    price: "₹999",
    rating: 4.5,
    reviews: 28,
    img1: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=800",
    description:
      "A sleek, minimal band crafted for everyday elegance. Pairs beautifully with stacked rings or worn alone.",
  },
  {
    id: "r2",
    name: "Gold Stacking Ring",
    category: "rings",
    priceNum: 1299,
    price: "₹1,299",
    rating: 4.8,
    reviews: 41,
    img1: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800",
    description:
      "Effortlessly stackable 18k gold-plated ring. Wear one or layer many for a curated look.",
  },
  {
    id: "r3",
    name: "Twisted Band Ring",
    category: "rings",
    priceNum: 1499,
    price: "₹1,499",
    rating: 4.3,
    reviews: 17,
    img1: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800",
    description:
      "A delicately twisted band that catches light at every angle. Timeless yet modern.",
  },
  {
    id: "r4",
    name: "Gemstone Ring",
    category: "rings",
    priceNum: 2199,
    price: "₹2,199",
    rating: 4.9,
    reviews: 53,
    img1: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=800",
    description:
      "A statement piece featuring a hand-set gemstone in a fine gold-plated setting.",
  },

  // NECKLACES
  {
    id: "n1",
    name: "Gold Chain Necklace",
    category: "necklaces",
    priceNum: 2499,
    price: "₹2,499",
    rating: 4.7,
    reviews: 62,
    img1: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800",
    description:
      "A classic gold chain with a modern weight and sheen. Versatile enough to dress up or down.",
  },
  {
    id: "n2",
    name: "Layered Pendant",
    category: "necklaces",
    priceNum: 1899,
    price: "₹1,899",
    rating: 4.6,
    reviews: 35,
    img1: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    description:
      "A dainty layered pendant necklace that adds depth and movement to any outfit.",
  },
  {
    id: "n3",
    name: "Pearl Strand",
    category: "necklaces",
    priceNum: 2999,
    price: "₹2,999",
    rating: 4.9,
    reviews: 80,
    img1: "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800",
    description:
      "Lustrous freshwater pearls strung on a fine thread for a timeless, refined look.",
  },
  {
    id: "n4",
    name: "Choker Necklace",
    category: "necklaces",
    priceNum: 1499,
    price: "₹1,499",
    rating: 4.4,
    reviews: 22,
    img1: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800",
    description:
      "A sleek choker that sits close to the neck, adding instant polish to any neckline.",
  },

  // EARRINGS
  {
    id: "e1",
    name: "Pearl Earrings",
    category: "earrings",
    priceNum: 1499,
    price: "₹1,499",
    rating: 4.8,
    reviews: 47,
    img1: "https://images.unsplash.com/photo-1704957205327-9fbd44d683b7?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=800",
    description:
      "Classic pearl drops in a fine gold-plated setting. Understated luxury for every occasion.",
  },
  {
    id: "e2",
    name: "Hoop Earrings",
    category: "earrings",
    priceNum: 899,
    price: "₹899",
    rating: 4.5,
    reviews: 39,
    img1: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1704957205327-9fbd44d683b7?q=80&w=800",
    description:
      "Lightweight gold hoops that never go out of style. Available in slim and medium widths.",
  },
  {
    id: "e3",
    name: "Crystal Studs",
    category: "earrings",
    priceNum: 699,
    price: "₹699",
    rating: 4.6,
    reviews: 55,
    img1: "https://images.unsplash.com/photo-1620785488459-cbfc1c0dc19e?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=800",
    description:
      "Sparkling crystal studs set in gold-plated posts. The perfect everyday earring.",
  },
  {
    id: "e4",
    name: "Tassel Earrings",
    category: "earrings",
    priceNum: 1199,
    price: "₹1,199",
    rating: 4.3,
    reviews: 18,
    img1: "https://images.unsplash.com/photo-1635767798638-3665a0a107fc?q=80&w=800",
    img2: "https://images.unsplash.com/photo-1620785488459-cbfc1c0dc19e?q=80&w=800",
    description:
      "Boho-luxe tassel earrings that move with you. A statement piece for any evening look.",
  },
];

export const categories = [
  {
    title: "Rings",
    slug: "rings",
    img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1410",
    description: "Stackable bands, gemstone rings & everyday essentials.",
  },
  {
    title: "Necklaces",
    slug: "necklaces",
    img: "https://images.unsplash.com/photo-1610661022658-5068c4d8f286?q=80&w=2342",
    description: "Chains, pendants & pearl strands for every neckline.",
  },
  {
    title: "Earrings",
    slug: "earrings",
    img: "https://images.unsplash.com/photo-1693212793204-bcea856c75fe?q=80&w=1760",
    description: "Studs, hoops & drops from subtle to statement.",
  },
];

export const getProductsByCategory = (slug) =>
  products.filter((p) => p.category === slug);

export const getProductById = (id) => products.find((p) => p.id === id);

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);