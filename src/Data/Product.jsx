import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

const Product = (id) => {
  const { listProducts } = useContext(CartContext);

  const [product, setProduct] = useState();

  const getProductID = () => {
    return new Promise((resolve, reject) => {
      resolve(listProducts)
    })
    .then((res) => {
      res.forEach((prod) => {
        if (prod.id === id) {
          console.log(typeof prod.id)
          console.log(typeof id)
          setProduct(prod);
        }
      });
    });
  };

  useEffect(() => {
    getProductID()
  });

  return product;
};

export default Product;
