import { useNavigate } from "react-router";
import Header from "~/src/pages/Components/header";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useState } from "react";

const sides = [
  {
    id: 1,
    name: "French Fries",
    description: "Crispy golden fries with salt",
    price: 3.99,
    image: "🍟",
    category: "Sides",
    rating: 4.6,
    prepTime: "8-10 min",
    calories: 365,
  },
  {
    id: 2,
    name: "Onion Rings",
    description: "Crispy fried onion rings",
    price: 4.49,
    image: "🧅",
    category: "Sides",
    rating: 4.5,
    prepTime: "10-12 min",
    calories: 430,
  },
  {
    id: 3,
    name: "Chicken Wings",
    description: "6 piece wings with sauce",
    price: 8.99,
    image: "🍗",
    category: "Sides",
    rating: 4.8,
    prepTime: "15-20 min",
    calories: 520,
  },
  {
    id: 4,
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter",
    price: 3.49,
    image: "🥖",
    category: "Sides",
    rating: 4.7,
    prepTime: "5-7 min",
    calories: 280,
  },
];

export default function Sides() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (sideId: number) => {
    setCart((prev) => ({
      ...prev,
      [sideId]: (prev[sideId] || 0) + 1,
    }));
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-orange-500 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/menu")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-bold">🍟 Sides & Appetizers</h1>
          <p className="text-lg opacity-90">Perfect complements to your meal</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sides.map((side) => (
              <FlipCard
                key={side.id}
                id={side.id}
                name={side.name}
                description={side.description}
                price={side.price}
                image={side.image}
                category={side.category}
                rating={side.rating}
                prepTime={side.prepTime}
                calories={side.calories}
                onAddToCart={addToCart}
                cartQuantity={cart[side.id] || 0}
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
