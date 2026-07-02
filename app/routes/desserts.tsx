import { useNavigate } from "react-router";
import Header from "~/src/pages/Components/header";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useState } from "react";

const desserts = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with frosting",
    price: 5.99,
    image: "🍰",
    category: "Dessert",
    rating: 4.9,
    prepTime: "5-10 min",
    calories: 450,
  },
  {
    id: 2,
    name: "Cheesecake",
    description: "Classic New York cheesecake",
    price: 6.99,
    image: "🍰",
    category: "Dessert",
    rating: 4.8,
    prepTime: "5-10 min",
    calories: 520,
  },
  {
    id: 3,
    name: "Brownie",
    description: "Fudgy chocolate brownie",
    price: 3.99,
    image: "🍫",
    category: "Dessert",
    rating: 4.7,
    prepTime: "5 min",
    calories: 320,
  },
  {
    id: 4,
    name: "Ice Cream",
    description: "Vanilla ice cream with toppings",
    price: 4.49,
    image: "🍦",
    category: "Dessert",
    rating: 4.6,
    prepTime: "2-3 min",
    calories: 280,
  },
];

export default function Desserts() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (dessertId: number) => {
    setCart((prev) => ({
      ...prev,
      [dessertId]: (prev[dessertId] || 0) + 1,
    }));
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-pink-500 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/menu")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-bold">🍰 Desserts</h1>
          <p className="text-lg opacity-90">Satisfy your sweet tooth</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <FlipCard
                key={dessert.id}
                id={dessert.id}
                name={dessert.name}
                description={dessert.description}
                price={dessert.price}
                image={dessert.image}
                category={dessert.category}
                rating={dessert.rating}
                prepTime={dessert.prepTime}
                calories={dessert.calories}
                onAddToCart={addToCart}
                cartQuantity={cart[dessert.id] || 0}
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
