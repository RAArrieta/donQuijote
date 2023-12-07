import Product from "../Data/Product";
import ListProducts from "../Data/ListProducts";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const listProducts = ListProducts();

  return (
    <CartContext.Provider value={{ listProducts, Product }}>
      {children}
    </CartContext.Provider>
  );
};
