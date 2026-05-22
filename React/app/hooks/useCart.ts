import { useState, useCallback } from "react";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  quantity: number;
}

interface UseCartReturn {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getSubtotal: () => number;
  getTax: (subtotal: number, taxRate?: number) => number;
  getItemCount: () => number;
}

/**
 * Custom hook for managing shopping cart state
 * Can be enhanced to use localStorage or Context API for persistence
 */
export function useCart(): UseCartReturn {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getSubtotal = useCallback(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const getTax = useCallback(
    (subtotal: number, taxRate: number = 0.1) => {
      return subtotal * taxRate;
    },
    []
  );

  const getTotal = useCallback(() => {
    const subtotal = getSubtotal();
    const tax = getTax(subtotal);
    const deliveryFee = 4.99;
    return subtotal + tax + deliveryFee;
  }, [getSubtotal, getTax]);

  const getItemCount = useCallback(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getSubtotal,
    getTax,
    getItemCount,
  };
}

/**
 * Enhanced version with localStorage persistence
 * Use this for production to maintain cart across sessions
 */
export function useCartWithStorage(): UseCartReturn {
  const STORAGE_KEY = "bites_cart";

  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const saveToStorage = useCallback((newItems: CartItem[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, []);

  const addToCart = useCallback(
    (item: Omit<CartItem, "quantity">) => {
      setItems((prevItems) => {
        const existingItem = prevItems.find((i) => i.id === item.id);
        const newItems = existingItem
          ? prevItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [...prevItems, { ...item, quantity: 1 }];
        saveToStorage(newItems);
        return newItems;
      });
    },
    [saveToStorage]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setItems((prevItems) => {
        const newItems = prevItems.filter((i) => i.id !== id);
        saveToStorage(newItems);
        return newItems;
      });
    },
    [saveToStorage]
  );

  const updateQuantity = useCallback(
    (id: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(id);
        return;
      }
      setItems((prevItems) => {
        const newItems = prevItems.map((i) =>
          i.id === id ? { ...i, quantity } : i
        );
        saveToStorage(newItems);
        return newItems;
      });
    },
    [removeFromCart, saveToStorage]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Failed to clear cart from localStorage:", error);
    }
  }, []);

  const getSubtotal = useCallback(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const getTax = useCallback(
    (subtotal: number, taxRate: number = 0.1) => {
      return subtotal * taxRate;
    },
    []
  );

  const getTotal = useCallback(() => {
    const subtotal = getSubtotal();
    const tax = getTax(subtotal);
    const deliveryFee = 4.99;
    return subtotal + tax + deliveryFee;
  }, [getSubtotal, getTax]);

  const getItemCount = useCallback(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getSubtotal,
    getTax,
    getItemCount,
  };
}
