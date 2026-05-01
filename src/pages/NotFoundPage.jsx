import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen pt-[70px] flex flex-col items-center justify-center text-center px-8"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Decorative ring */}
      <div className="relative mb-12">
        <div className="w-32 h-32 rounded-full border-2 opacity-10" style={{ borderColor: "var(--text)" }} />
        <div className="absolute inset-4 rounded-full border opacity-20" style={{ borderColor: "var(--text)" }} />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-light opacity-30">
          404
        </p>
      </div>

      <p className="text-xs tracking-[0.4em] uppercase opacity-40 mb-4">Page Not Found</p>
      <h1 className="text-4xl md:text-5xl tracking-wide font-light mb-4">
        Lost in the collection?
      </h1>
      <p className="text-sm opacity-50 max-w-sm mb-12 leading-relaxed">
        The page you're looking for doesn't exist — but our jewels are waiting for you.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="text-xs tracking-[0.35em] uppercase px-10 py-4 bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
        >
          Back to Home
        </Link>
        <Link
          to="/category/rings"
          className="text-xs tracking-[0.35em] uppercase px-10 py-4 border hover:opacity-60 transition"
          style={{ borderColor: "var(--text)" }}
        >
          Shop Rings
        </Link>
      </div>
    </div>
  );
}