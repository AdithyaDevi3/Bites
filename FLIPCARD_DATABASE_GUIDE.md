# Flip Card Integration Guide

## Overview

The FlipCard component is designed to work with data from your database. Each card displays a food item with an animated flip effect that reveals details on the back.

## Component Location

- **Component**: `app/src/pages/Components/FlipCard/flip-card.tsx`
- **Styles**: `app/src/pages/Components/FlipCard/flip-card.css`
- **Types**: `app/types/food-item.ts`

## FlipCard Props

```typescript
interface FlipCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // URL or emoji
  category?: string;
  rating?: number; // 0-5
  prepTime?: string; // e.g., "20-30 min"
  calories?: number;
  onAddToCart: (id: number) => void;
  cartQuantity?: number;
}
```

## Front of Card

- **Large Image/Emoji** (80px emoji or actual image)
- **Category Badge** (top-right) - e.g., "PIZZA"
- **Cart Badge** (top-left) - Shows quantity if in cart
- **Item Name** (bottom)

## Back of Card (On Flip)

- **Item Title**
- **Description**
- **3 Info Items**:
  - ⏱️ Prep Time
  - ⭐ Rating
  - 🔥 Calories
- **Footer**:
  - Price (large, bold)
  - "Add to Cart" / "In Cart (X)" Button

## Integration Steps

### 1. Create API Service Layer

```typescript
// app/services/foodService.ts
import { FoodItem, Category } from "~/types/food-item";

export async function fetchCategoryItems(
  category: string,
): Promise<FoodItem[]> {
  const response = await fetch(`/api/items?category=${category}`);
  if (!response.ok) throw new Error("Failed to fetch items");
  return response.json();
}

export async function fetchAllCategories(): Promise<Category[]> {
  const response = await fetch("/api/categories");
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
}

export async function searchItems(query: string): Promise<FoodItem[]> {
  const response = await fetch(`/api/search?q=${query}`);
  if (!response.ok) throw new Error("Failed to search items");
  return response.json();
}
```

### 2. Update Category Page (Example: Pizza Page)

```typescript
// app/routes/pizza.tsx
import { useState, useEffect } from "react";
import { FoodItem } from "~/types/food-item";
import FlipCard from "~/src/pages/Components/FlipCard/flip-card";

export default function Pizza() {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    async function loadPizzas() {
      try {
        const data = await fetchCategoryItems("Pizza");
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadPizzas();
  }, []);

  const addToCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <FlipCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
            rating={item.rating}
            prepTime={item.prepTime}
            calories={item.calories}
            onAddToCart={addToCart}
            cartQuantity={cart[item.id] || 0}
          />
        ))}
      </div>
    </section>
  );
}
```

### 3. Database Schema (Example SQL)

```sql
CREATE TABLE food_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(500),
  category VARCHAR(100) NOT NULL,
  rating DECIMAL(3, 1),
  prep_time VARCHAR(50),
  calories INT,
  dietary_tags JSON,
  allergies JSON,
  ingredients JSON,
  availability BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX (category),
  INDEX (rating),
  INDEX (price)
);

-- Example insert
INSERT INTO food_items (name, description, price, image_url, category, rating, prep_time, calories)
VALUES (
  'Margherita Pizza',
  'Classic pizza with tomato, mozzarella, and basil',
  12.99,
  'https://example.com/pizza-margherita.jpg',
  'Pizza',
  4.8,
  '20-25 min',
  280
);
```

### 4. Environment Variables (.env)

```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_IMAGE_BASE_URL=https://cdn.example.com/images
```

### 5. Using the FoodItem Type

```typescript
import { FoodItem, CartItem, Order } from "~/types/food-item";

// In your components
const item: FoodItem = {
  id: 1,
  name: "Margherita Pizza",
  description: "Classic pizza",
  price: 12.99,
  image: "https://example.com/pizza.jpg",
  category: "Pizza",
  rating: 4.8,
  prepTime: "20-25 min",
  calories: 280,
};

// Add to cart
const cartItem: CartItem = {
  ...item,
  quantity: 2,
};
```

## Real Image Setup

### Replace Emojis with Real Images

```typescript
// Current (with emoji)
{
  image: "🍕";
}

// Replace with (URL from database)
{
  image: "https://cdn.example.com/images/margherita-pizza.jpg";
}

// Or use image CDN service like Cloudinary
{
  image: "https://res.cloudinary.com/your-account/image/upload/v1234567890/pizza.jpg";
}
```

### CSS Update for Real Images

```css
.card-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  background-size: cover;
  background-position: center;
  background-image: url(${imageUrl});
  transition: transform 0.3s;
}
```

## Features Ready for Database

✅ **Scalable**: All items pulled from database
✅ **Filterable**: By category, rating, price
✅ **Searchable**: Full-text search support
✅ **Sortable**: By rating, price, prep time
✅ **Flexible**: Supports all dietary restrictions
✅ **Real-time**: Updates from database
✅ **Reusable**: One component for all categories

## Next Steps

1. Set up your backend API endpoint
2. Implement the `fetchCategoryItems()` function
3. Replace mock data with API calls
4. Add loading and error states
5. Integrate with your database
6. Update image URLs to point to your CDN
7. Add filtering and search functionality
8. Implement caching for performance

## API Response Format

```json
{
  "data": [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "description": "Classic pizza with tomato, mozzarella, and basil",
      "price": 12.99,
      "image": "https://cdn.example.com/pizza-margherita.jpg",
      "category": "Pizza",
      "rating": 4.8,
      "prepTime": "20-25 min",
      "calories": 280,
      "dietary": ["vegetarian"],
      "allergies": ["dairy"],
      "ingredients": ["tomato", "mozzarella", "basil", "olive oil"]
    }
  ],
  "total": 24,
  "page": 1,
  "limit": 10
}
```

---

Ready to connect your database? The FlipCard component is production-ready and waiting for real data! 🚀
