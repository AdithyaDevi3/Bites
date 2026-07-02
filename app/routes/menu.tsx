import { useNavigate } from "react-router";
import type { Route } from "./+types/menu";
import Header from "~/src/pages/Components/header";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Browse Menu" },
    { name: "description", content: "Browse our menu and place your order" },
  ];
};

export default function Menu() {
  const navigate = useNavigate();

  const categories = [
    { title: "Pizza", emoji: "🍕", to: "/pizza" },
    { title: "Burgers", emoji: "🍔", to: "/burgers" },
    { title: "Drinks", emoji: "🥤", to: "/drinks" },
    { title: "Desserts", emoji: "🍰", to: "/desserts" },
    { title: "Sides", emoji: "🍟", to: "/sides" },
    { title: "Salads", emoji: "🥗", to: "/salads" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Menu Intro */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-lg opacity-90">
            Explore our delicious selection of food and beverages
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.to}
                onClick={() => navigate(category.to)}
                className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-yellow-500">
                  {category.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Button */}
      <section className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate("/cart")}
          className="btn-primary text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          🛒 View Cart
        </button>
      </section>
    </div>
  );
}
