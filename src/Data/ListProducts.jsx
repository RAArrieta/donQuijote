import data from "./Productos.json";
import { useEffect, useState } from "react";

const ListProducts = () => {
  const [listProducts, setListProducts] = useState([]);

  const getListProducts = () => {
    return new Promise((resolve) => {
      resolve(data);
    });
  };

  useEffect(() => {
    getListProducts().then((res) => {
      setListProducts(res);
    });
  });

  return listProducts;
};

export default ListProducts;
