"use client";
import { Link, useNavigate } from "react-router";
import { useCart } from "~/context/CartContext";
import { useFavorites } from "~/context/FavoritesContext";

export default function Header() {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const { favorites } = useFavorites();
  const favCount = favorites.length;

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="header-container">
        <Link
          to="/"
          className="text-3xl font-bold text-yellow-500 hover:text-yellow-400"
        >
          🍕 Bites
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          <Link to="/orders" className="nav-link">
            Orders
          </Link>
          <Link to="/favorites" className="nav-link">
            ❤️ Favorites {favCount > 0 && `(${favCount})`}
          </Link>
          <button onClick={() => navigate("/cart")} className="btn-primary">
            🛒 Cart {totalItems > 0 && `(${totalItems})`}
          </button>
        </nav>
      </div>
    </header>
  );
}
