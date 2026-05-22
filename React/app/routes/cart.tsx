import { useNavigate } from "react-router";
import type { Route } from "./+types/cart";
import Header from "~/src/pages/Components/header";
import { useState, useEffect } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Shopping Cart" },
    { name: "description", content: "Review and checkout your order" },
  ];
};

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<any[]>([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 12.99,
      quantity: 2,
      image: "🍕",
    },
    {
      id: 2,
      name: "Classic Cheeseburger",
      price: 10.99,
      quantity: 1,
      image: "🍔",
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.1;
  const deliveryFee = 4.99;
  const total = subtotal + tax + deliveryFee;

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Add some delicious items to get started!
            </p>
            <button
              onClick={() => navigate("/menu")}
              className="btn-primary text-lg px-6 py-3"
            >
              Continue Shopping
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Cart Header */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold">🛒 Your Cart</h1>
          <p className="text-lg opacity-90">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in cart
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 pb-6 border-b last:border-0 last:pb-0"
                >
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-lg font-bold w-24 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6 border-b pb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%):</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span className="font-semibold">
                    ${deliveryFee.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold mb-6">
                <span>Total:</span>
                <span className="text-yellow-600">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="btn-primary w-full text-lg py-3 mb-2"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => navigate("/menu")}
                className="btn-secondary w-full text-lg py-3"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
