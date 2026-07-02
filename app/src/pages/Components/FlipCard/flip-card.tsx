"use client";
import { useState } from "react";
import { useFavorites } from "~/context/FavoritesContext";
import "./flip-card.css";

interface FlipCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
  prepTime?: string;
  calories?: number;
  onAddToCart: (id: number) => void;
  cartQuantity?: number;
}

export default function FlipCard({
  id,
  name,
  description,
  price,
  image,
  category,
  rating = 4.5,
  prepTime = "20-30 min",
  calories = 500,
  onAddToCart,
  cartQuantity = 0,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorited = isFavorite(id);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't flip if clicking on a button or interactive element
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front of card - Image */}
        <div className="flip-card-front">
          <div className="card-image-container">
            <div className="card-image">
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                image
              )}
            </div>
            <button
              aria-label={favorited ? "Remove favorite" : "Add favorite"}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(id);
              }}
              className="favorite-btn absolute top-2 right-2 text-2xl"
            >
              {favorited ? "❤️" : "🤍"}
            </button>
            {category && <span className="category-badge">{category}</span>}
            {cartQuantity > 0 && (
              <span className="cart-badge">{cartQuantity}</span>
            )}
          </div>
          <div className="card-title">{name}</div>
        </div>

        {/* Back of card - Details */}
        <div className="flip-card-back">
          <div className="details-container">
            <h3 className="details-title">{name}</h3>
            <p className="details-description">{description}</p>

            <div className="details-info">
              <div className="info-item">
                <span className="info-label">⏱️</span>
                <span className="info-value">{prepTime}</span>
              </div>
              <div className="info-item">
                <span className="info-label">⭐</span>
                <span className="info-value">{rating}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🔥</span>
                <span className="info-value">{calories}cal</span>
              </div>
            </div>

            <div className="details-footer">
              <span className="price">${price.toFixed(2)}</span>
              <button
                onClick={(e) => {
                  onAddToCart(id);
                }}
                className="add-to-cart-btn"
              >
                {cartQuantity > 0 ? `In Cart (${cartQuantity})` : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
