/**
 * Food Item Interface
 * This interface matches the structure of data you'll receive from your database
 * Each card will display one food item with this structure
 */

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // URL to image or emoji placeholder
  category: string; // e.g., "Pizza", "Burger", "Drink"
  rating: number; // 0-5 stars
  prepTime: string; // e.g., "20-30 min"
  calories: number; // Calorie count
  dietary?: string[]; // Optional: ["vegan", "gluten-free", etc.]
  allergies?: string[]; // Optional: ["peanuts", "dairy", etc.]
  ingredients?: string[]; // Optional: list of main ingredients
  availability?: boolean; // Optional: is the item available
  createdAt?: string; // Optional: ISO date string
  updatedAt?: string; // Optional: ISO date string
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: "pending" | "confirmed" | "preparing" | "out_for_delivery" | "delivered";
  deliveryAddress: string;
  createdAt: string;
  estimatedDeliveryTime: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  items: FoodItem[];
}

/**
 * Database Query Examples:
 *
 * // Get all items in a category
 * SELECT * FROM food_items WHERE category = 'Pizza' ORDER BY rating DESC;
 *
 * // Get items by price range
 * SELECT * FROM food_items WHERE price BETWEEN 10 AND 20;
 *
 * // Get popular items (high rating)
 * SELECT * FROM food_items WHERE rating >= 4.5 ORDER BY rating DESC LIMIT 6;
 *
 * // Get items with dietary restrictions
 * SELECT * FROM food_items WHERE dietary_tags LIKE '%vegan%';
 */
