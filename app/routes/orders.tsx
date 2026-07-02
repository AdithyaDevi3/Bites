import { useNavigate } from "react-router";
import type { Route } from "./+types/orders";
import Header from "~/src/pages/Components/header";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - My Orders" },
    { name: "description", content: "View your order history" },
  ];
};

export default function Orders() {
  const navigate = useNavigate();

  const orders = [
    {
      id: "ORD001",
      date: "2024-05-20",
      total: 31.37,
      status: "Delivered",
      items: ["Margherita Pizza x2", "Classic Cheeseburger x1"],
      icon: "✅",
    },
    {
      id: "ORD002",
      date: "2024-05-19",
      total: 28.97,
      status: "Delivered",
      items: ["Pepperoni Pizza x1", "Bacon Burger x2"],
      icon: "✅",
    },
    {
      id: "ORD003",
      date: "2024-05-18",
      total: 45.23,
      status: "Delivered",
      items: [
        "Double Burger x2",
        "Vegetarian Pizza x1",
        "Classic Cheeseburger x1",
      ],
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Orders Header */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold">📋 My Orders</h1>
          <p className="text-lg opacity-90">View your order history</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                    {/* Order Info */}
                    <div>
                      <p className="text-gray-500 text-sm">Order ID</p>
                      <p className="text-xl font-bold">{order.id}</p>
                      <p className="text-gray-600 text-sm">{order.date}</p>
                    </div>

                    {/* Items */}
                    <div>
                      <p className="text-gray-500 text-sm">Items</p>
                      <div className="space-y-1">
                        {order.items.map((item, idx) => (
                          <p key={idx} className="text-sm font-medium">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <p className="text-gray-500 text-sm">Status</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl">{order.icon}</span>
                        <p className="font-bold text-green-600">
                          {order.status}
                        </p>
                      </div>
                    </div>

                    {/* Total & Action */}
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">Total</p>
                      <p className="text-2xl font-bold text-yellow-600 mb-2">
                        ${order.total.toFixed(2)}
                      </p>
                      <button
                        onClick={() => navigate("/menu")}
                        className="btn-primary text-sm"
                      >
                        Order Again
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <h2 className="text-3xl font-bold mb-4">No Orders Yet</h2>
              <p className="text-gray-600 mb-8">
                You haven't placed any orders yet. Start ordering now!
              </p>
              <button
                onClick={() => navigate("/menu")}
                className="btn-primary text-lg px-6 py-3"
              >
                Browse Menu
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Bites?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your food delivered in 30-45 minutes
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Fresh ingredients and careful preparation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Great Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with frequent offers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Hungry? Order Now!</h2>
          <button
            onClick={() => navigate("/menu")}
            className="bg-black text-white text-lg px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition"
          >
            Start Ordering
          </button>
        </div>
      </section>
    </div>
  );
}
