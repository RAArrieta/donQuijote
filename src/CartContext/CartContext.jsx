import FetchProduct from "../Data/FetchProduct";
import dbF from "../Data/ConfigFirebase";
import { createContext } from "react";
import FetchData from "../Data/FetchData";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const db = FetchData();

  return (
    <CartContext.Provider value={{ db, dbF, FetchProduct }}>
      {children}
    </CartContext.Provider>
  );
};
