import { useNavigate } from "react-router";
import Header from "~/src/pages/Components/header";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useState } from "react";

const drinks = [
  {
    id: 1,
    name: "Coca Cola",
    description: "Classic cola beverage",
    price: 2.49,
    image: "🥤",
    category: "Drink",
    rating: 4.5,
    prepTime: "2-3 min",
    calories: 140,
  },
  {
    id: 2,
    name: "Sprite",
    description: "Refreshing lemon-lime soda",
    price: 2.49,
    image: "🥤",
    category: "Drink",
    rating: 4.4,
    prepTime: "2-3 min",
    calories: 140,
  },
  {
    id: 3,
    name: "Orange Juice",
    description: "Fresh squeezed orange juice",
    price: 3.99,
    image: "🧃",
    category: "Drink",
    rating: 4.7,
    prepTime: "5 min",
    calories: 110,
  },
  {
    id: 4,
    name: "Iced Coffee",
    description: "Cold brew coffee with ice",
    price: 4.49,
    image: "☕",
    category: "Drink",
    rating: 4.8,
    prepTime: "3-5 min",
    calories: 50,
  },
];

export default function Drinks() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (drinkId: number) => {
    setCart((prev) => ({
      ...prev,
      [drinkId]: (prev[drinkId] || 0) + 1,
    }));
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-blue-500 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/menu")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-bold">🥤 Drinks & Beverages</h1>
          <p className="text-lg opacity-90">
            Quench your thirst with our selection
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinks.map((drink) => (
              <FlipCard
                key={drink.id}
                id={drink.id}
                name={drink.name}
                description={drink.description}
                price={drink.price}
                image={drink.image}
                category={drink.category}
                rating={drink.rating}
                prepTime={drink.prepTime}
                calories={drink.calories}
                onAddToCart={addToCart}
                cartQuantity={cart[drink.id] || 0}
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
