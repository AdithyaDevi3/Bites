import { useNavigate } from "react-router";
import type { Route } from "./+types/burgers";
import Header from "~/src/pages/Components/header";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useState } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Burger Menu" },
    {
      name: "description",
      content: "Choose from our gourmet burger selection",
    },
  ];
};

const burgers = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Beef patty with cheddar cheese, lettuce, tomato, and onion",
    price: 10.99,
    image: "🍔",
    category: "Burger",
    rating: 4.7,
    prepTime: "15-20 min",
    calories: 520,
  },
  {
    id: 2,
    name: "Double Burger",
    description: "Two beef patties with double cheese",
    price: 13.99,
    image: "🍔",
    category: "Burger",
    rating: 4.8,
    prepTime: "18-23 min",
    calories: 680,
  },
  {
    id: 3,
    name: "Bacon Burger",
    description: "Crispy bacon, cheddar, lettuce, tomato, and special sauce",
    price: 12.99,
    image: "🍔",
    category: "Burger",
    rating: 4.9,
    prepTime: "18-23 min",
    calories: 620,
  },
  {
    id: 4,
    name: "Mushroom Swiss",
    description: "Sautéed mushrooms, Swiss cheese, and garlic aioli",
    price: 12.99,
    image: "🍔",
    category: "Burger",
    rating: 4.6,
    prepTime: "20-25 min",
    calories: 580,
  },
  {
    id: 5,
    name: "Spicy Jalapeño",
    description: "Pepper jack cheese, jalapeños, onions, and spicy mayo",
    price: 11.99,
    image: "🍔",
    category: "Burger",
    rating: 4.5,
    prepTime: "17-22 min",
    calories: 550,
  },
  {
    id: 6,
    name: "Gourmet Triple Stack",
    description:
      "Three beef patties, triple cheese, bacon, and premium toppings",
    price: 16.99,
    image: "🍔",
    category: "Burger",
    rating: 4.9,
    prepTime: "25-30 min",
    calories: 850,
  },
];

export default function Burgers() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (burgerId: number) => {
    setCart((prev) => ({
      ...prev,
      [burgerId]: (prev[burgerId] || 0) + 1,
    }));
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Burger Header */}
      <section className="bg-orange-600 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/menu")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-bold">🍔 Our Burger Selection</h1>
          <p className="text-lg opacity-90">
            Handcrafted burgers made with premium beef
          </p>
        </div>
      </section>

      {/* Burger Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgers.map((burger) => (
              <FlipCard
                key={burger.id}
                id={burger.id}
                name={burger.name}
                description={burger.description}
                price={burger.price}
                image={burger.image}
                category={burger.category}
                rating={burger.rating}
                prepTime={burger.prepTime}
                calories={burger.calories}
                onAddToCart={addToCart}
                cartQuantity={cart[burger.id] || 0}
              />
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
          🛒 Cart {cartCount > 0 && `(${cartCount})`}
        </button>
      </section>
    </div>
  );
}
