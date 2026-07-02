import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";

const FavoritesContext = createContext<any>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = React.useState<number[]>(() => {
    try {
      const raw = localStorage.getItem("bites_favorites");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const save = (arr: number[]) => {
    try {
      localStorage.setItem("bites_favorites", JSON.stringify(arr));
    } catch {}
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      save(next);
      return next;
    });
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
