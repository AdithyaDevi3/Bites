import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useCartWithStorage } from "../hooks/useCart";
import type { CartItem as HookCartItem } from "../hooks/useCart";

export type CartItem = HookCartItem;

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  // Use the persistent cart hook to keep cart across sessions
  const {
    items,
    addToCart: hookAddToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
  } = useCartWithStorage();

  const getTotalItems = () => getItemCount();

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    // ensure description exists for compatibility with the persistent hook
    const { description, ...rest } = item as any;
    const payload: Omit<HookCartItem, "quantity"> = {
      ...rest,
      description: description || "",
    };
    hookAddToCart(payload);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
