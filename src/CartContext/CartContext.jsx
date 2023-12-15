import { createContext } from "react";
import FetchData from "../Data/FetchData";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const products = FetchData();
  
  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};
