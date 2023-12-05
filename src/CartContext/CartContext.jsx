import Config from "../Data/Config";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const productos = Config();

  return (
    <CartContext.Provider value={{ productos }}>
      {children}
    </CartContext.Provider>
  );
};
