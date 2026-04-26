export default function Footer() {
  return (
    <footer id="contact" className="w-full px-8 md:px-16 pt-20 pb-10 border-t">

      {/* TOP */}
      <div className="grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-lg tracking-[0.2em] uppercase font-semibold">
            Gem Jam Jewels
          </h3>

          <p className="text-sm opacity-60 mt-4 max-w-xs">
            Bold, expressive pieces crafted to stand out and elevate your everyday style.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex gap-12 text-sm">

          <div>
            <p className="mb-4 tracking-wide">Shop</p>
            <ul className="space-y-2 opacity-60">
              <li className="hover:opacity-100 cursor-pointer">Rings</li>
              <li className="hover:opacity-100 cursor-pointer">Necklaces</li>
              <li className="hover:opacity-100 cursor-pointer">Earrings</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 tracking-wide">Company</p>
            <ul className="space-y-2 opacity-60">
              <li className="hover:opacity-100 cursor-pointer">About</li>
              <li className="hover:opacity-100 cursor-pointer">Contact</li>
              <li className="hover:opacity-100 cursor-pointer">Shipping</li>
            </ul>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div>
          <p className="mb-4 tracking-wide text-sm">
            Stay in the loop
          </p>

          <div className="flex border">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm outline-none bg-transparent"
            />
            <button className="px-4 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">

        <p>© 2026 Gem Jam Jewels</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:opacity-100">Instagram</span>
          <span className="cursor-pointer hover:opacity-100">Pinterest</span>
        </div>

      </div>

    </footer>
  );
}