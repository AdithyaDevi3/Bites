import { useNavigate } from "react-router";
import Header from "~/src/pages/Components/header";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useState } from "react";

const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Crisp romaine with parmesan and croutons",
    price: 9.99,
    image: "🥗",
    category: "Salad",
    rating: 4.7,
    prepTime: "10-15 min",
    calories: 320,
  },
  {
    id: 2,
    name: "Garden Salad",
    description: "Mixed greens with fresh vegetables",
    price: 8.99,
    image: "🥗",
    category: "Salad",
    rating: 4.6,
    prepTime: "10-15 min",
    calories: 280,
  },
  {
    id: 3,
    name: "Greek Salad",
    description: "Tomatoes, cucumbers, olives, and feta",
    price: 10.99,
    image: "🥗",
    category: "Salad",
    rating: 4.8,
    prepTime: "12-17 min",
    calories: 350,
  },
  {
    id: 4,
    name: "Chicken Salad",
    description: "Grilled chicken with mixed greens",
    price: 12.99,
    image: "🥗",
    category: "Salad",
    rating: 4.9,
    prepTime: "15-20 min",
    calories: 420,
  },
];

export default function Salads() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (saladId: number) => {
    setCart((prev) => ({
      ...prev,
      [saladId]: (prev[saladId] || 0) + 1,
    }));
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-green-500 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/menu")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-bold">🥗 Salads</h1>
          <p className="text-lg opacity-90">Fresh and healthy choices</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salads.map((salad) => (
              <FlipCard
                key={salad.id}
                id={salad.id}
                name={salad.name}
                description={salad.description}
                price={salad.price}
                image={salad.image}
                category={salad.category}
                rating={salad.rating}
                prepTime={salad.prepTime}
                calories={salad.calories}
                onAddToCart={addToCart}
                cartQuantity={cart[salad.id] || 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="fixed bottom-6 right-6">
        <button
          onClick={() => navigate("/cart")}
          className="btn-primary text-lg px-6 py-3 rounded-full shadow-lg"
        >
          🛒 Cart {cartCount > 0 && `(${cartCount})`}
        </button>
      </section>
    </div>
  );
}
