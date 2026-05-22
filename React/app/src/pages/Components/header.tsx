import { Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-500 hover:text-yellow-400"
        >
          🍕 Bites
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/menu"
            className="text-white hover:text-yellow-500 transition font-semibold"
          >
            Menu
          </Link>
          <Link
            to="/orders"
            className="text-white hover:text-yellow-500 transition font-semibold"
          >
            Orders
          </Link>
          <button
            onClick={() => navigate("/cart")}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
          >
            🛒 Cart
          </button>
        </nav>
      </div>
    </header>
  );
}
