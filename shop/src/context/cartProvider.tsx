"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  id: string;
  quantity: number;
  item: any;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: any) => void;
  removeItem: (id: string) => void;
  getItem: (id: string) => any;
  modifyQuantity: (id: string, quantity: number) => void;
  getTotalAmount: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    //check if item already exists in cart then dont add it
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      return;
    }
    setItems([...items, item]);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getItem = (id: string) => {
    return items.find((i) => i.id === id);
  };

  const clearCart = () => {
    setItems([]);
  };

  const modifyQuantity = (id: string, quantity: number) => {
    setItems((prevItems: any) => {
      const updatedItems = prevItems
        .map((item: any) => {
          if (item.id === id) {
            const newQuantity = item.quantity + quantity;
            if (newQuantity <= 0) {
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean);
      return updatedItems;
    });
  };

  const getTotalAmount = () => {
    return items.reduce(
      (acc, item) => acc + item.item.Price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        getItem,
        modifyQuantity,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within an CartProvider");
  }
  return context;
};
