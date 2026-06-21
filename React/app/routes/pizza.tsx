import { useNavigate, useSearchParams } from "react-router";
import type { Route } from "./+types/pizza";
import Header from "~/src/pages/Components/header";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useCart } from "~/context/CartContext";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Pizza Menu" },
    {
      name: "description",
      content: "Choose from our delicious pizza selection",
    },
  ];
};

const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic pizza with tomato, mozzarella, and basil",
    price: 12.99,
    image: "🍕",
    category: "Pizza",
    rating: 4.8,
    prepTime: "20-25 min",
    calories: 280,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Loaded with pepperoni and extra cheese",
    price: 14.99,
    image: "🍕",
    category: "Pizza",
    rating: 4.9,
    prepTime: "22-27 min",
    calories: 320,
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Fresh vegetables and mozzarella",
    price: 13.99,
    image: "🍕",
    category: "Pizza",
    rating: 4.6,
    prepTime: "20-25 min",
    calories: 240,
  },
  {
    id: 4,
    name: "Meat Lovers",
    description: "Pepperoni, bacon, ham, and sausage",
    price: 16.99,
    image: "🍕",
    category: "Pizza",
    rating: 4.7,
    prepTime: "25-30 min",
    calories: 420,
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "Ham and pineapple",
    price: 14.99,
    image: "🍕",
    category: "Pizza",
    rating: 4.4,
    prepTime: "22-27 min",
    calories: 300,
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Grilled chicken with BBQ sauce",
    price: 15.99,
    image: "🍕",
    category: "Pizza",
    rating: 4.8,
    prepTime: "23-28 min",
    calories: 350,
  },
];

export default function Pizza() {
  const navigate = useNavigate();
  const { items, addToCart, getTotalItems } = useCart();

  const cartCount = getTotalItems();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Pizza Header */}
      <section className="bg-red-500 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/menu")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Menu
          </button>
          <h1 className="text-4xl font-bold">🍕 Our Pizza Selection</h1>
          <p className="text-lg opacity-90">
            Freshly baked with premium ingredients
          </p>
        </div>
      </section>

      {/* Pizza Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pizzas.map((pizza) => {
              const cartItem = items.find((it) => it.id === pizza.id);
              const cartQuantity = cartItem ? cartItem.quantity : 0;
              return (
                <FlipCard
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  description={pizza.description}
                  price={pizza.price}
                  image={pizza.image}
                  category={pizza.category}
                  rating={pizza.rating}
                  prepTime={pizza.prepTime}
                  calories={pizza.calories}
                  onAddToCart={() =>
                    addToCart({
                      id: pizza.id,
                      name: pizza.name,
                      price: pizza.price,
                      image: pizza.image,
                      category: pizza.category,
                    })
                  }
                  cartQuantity={cartQuantity}
                />
              );
            })}
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
