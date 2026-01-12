import React, { createContext, useContext, type ReactNode } from 'react';
import { useCart,type CartItem } from '../hooks/useCart';
import { useFavorites } from '../hooks/useFovarite';

import type { Product } from '../data/products';

interface CartContextType {
  // Cart
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
  // Favorites
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();
  const favs = useFavorites();

  return (
    <CartContext.Provider
      value={{
        cartItems: cart.items,
        addToCart: cart.addToCart,
        removeFromCart: cart.removeFromCart,
        updateQuantity: cart.updateQuantity,
        clearCart: cart.clearCart,
        cartTotal: cart.total,
        cartItemCount: cart.itemCount,
        favorites: favs.favorites,
        toggleFavorite: favs.toggleFavorite,
        isFavorite: favs.isFavorite,
        clearFavorites: favs.clearFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
