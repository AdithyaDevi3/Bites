import Header from "~/src/pages/Components/header";
import { useFavorites } from "~/context/FavoritesContext";
import { products } from "~/data/products";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";
import { useCart } from "~/context/CartContext";
import { useNavigate } from "react-router";

export default function Favorites() {
  const { favorites } = useFavorites();
  const { addToCart, items } = useCart();
  const navigate = useNavigate();

  const favoriteItems = products.pizzas.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-6">❤️ Your Favorites</h1>
          {favoriteItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600">No favorites yet — add some!</p>
              <button
                onClick={() => navigate("/menu")}
                className="btn-primary mt-6"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteItems.map((p) => {
                const cartItem = items.find((it) => it.id === p.id);
                const cartQuantity = cartItem ? cartItem.quantity : 0;
                return (
                  <FlipCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    price={p.price}
                    image={p.image}
                    category={p.category}
                    onAddToCart={() =>
                      addToCart({
                        id: p.id,
                        name: p.name,
                        description: p.description || "",
                        price: p.price,
                        image: p.image,
                        category: p.category,
                      })
                    }
                    cartQuantity={cartQuantity}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
