import { useNavigate } from "react-router";
import type { Route } from "./+types/checkout";
import Header from "~/src/pages/Components/header";
import { useState } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Checkout" },
    { name: "description", content: "Complete your order" },
  ];
};

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      navigate("/orders");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-4">
              Thank you for your order. Your food will be delivered shortly.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Redirecting to your orders...
            </p>
            <button
              onClick={() => navigate("/orders")}
              className="btn-primary text-lg px-6 py-3"
            >
              View My Orders
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Checkout Header */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/cart")}
            className="mb-4 text-white hover:opacity-80"
          >
            ← Back to Cart
          </button>
          <h1 className="text-4xl font-bold">Checkout</h1>
          <p className="text-lg opacity-90">Complete your order</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md p-8"
              >
                {/* Delivery Information */}
                <h2 className="text-2xl font-bold mb-6">
                  Delivery Information
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="address"
                    placeholder="Delivery Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Payment Information */}
                <h2 className="text-2xl font-bold mb-6 border-t pt-6">
                  Payment Information
                </h2>

                <div className="mb-6">
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Name on Card"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="col-span-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-3 mt-8 font-bold"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2 mb-6 border-b pb-6">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">$23.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax:</span>
                    <span className="font-semibold">$2.40</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="font-semibold">$4.99</span>
                  </div>
                </div>

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span className="text-green-600">$31.37</span>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    📍 Estimated Delivery Time:
                  </p>
                  <p className="font-bold">30 - 45 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
