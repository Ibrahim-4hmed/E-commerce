import { useState, useEffect } from 'react';
import type { Product } from '../data/products';

const FAVORITES_STORAGE_KEY:"kickzone-favorites" = 'kickzone-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const stored: string | null = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse favorites from storage');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product):void => {
    setFavorites(prev => {
      if (prev.some(p => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromFavorites = (productId: string):void => {
    setFavorites(prev => prev.filter(p => p.id !== productId));
  };

  const toggleFavorite = (product: Product):void => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const isFavorite = (productId: string): boolean => {
    return favorites.some(p => p.id === productId);
  };

  const clearFavorites = ():void => {
    setFavorites([]);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
  };
};
