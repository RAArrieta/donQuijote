import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

const FetchProduct = (id) => {
  const { db } = useContext(CartContext);

  const [product, setProduct] = useState();

  const FetchProductID = () => {
    return new Promise((resolve, reject) => {
      resolve(db);
    }).then((res) => {
      console.log(res)
      // const prod = res.find((item) => item.id === id)
      // setProduct(prod);
    });
  };

  useEffect(() => {
    FetchProductID();
  });

  return product;
};

export default FetchProduct;
