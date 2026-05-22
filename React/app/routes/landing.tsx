import { useNavigate } from "react-router";
import type { Route } from "./+types/landing";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Delicious Food Delivery" },
    { name: "description", content: "Order delicious food from Bites today!" },
  ];
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-50">
        <h1 className="text-3xl font-bold text-yellow-500">Bites</h1>
        <div className="flex gap-4">
          <button onClick={() => navigate("/menu")} className="btn-secondary">
            Browse Menu
          </button>
          <button onClick={() => navigate("/orders")} className="btn-secondary">
            My Orders
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-500">Bites</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Discover the most delicious food delivered right to your doorstep
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <div className="text-4xl mb-4">🍕</div>
            <h3 className="text-xl font-bold mb-2">Fresh Pizza</h3>
            <p className="text-gray-400">
              Handmade with the finest ingredients
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <div className="text-4xl mb-4">🍔</div>
            <h3 className="text-xl font-bold mb-2">Juicy Burgers</h3>
            <p className="text-gray-400">Premium beef cooked to perfection</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-400">Get your order in 30 minutes</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/menu")}
          className="btn-primary text-lg px-8 py-3 transform hover:scale-105 transition"
        >
          Start Ordering Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 text-center py-6 border-t border-gray-700">
        <p className="text-gray-400">© 2024 Bites. All rights reserved.</p>
      </footer>
    </div>
  );
}
