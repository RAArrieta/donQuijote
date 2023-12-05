import data from "./Productos.json";
import { useEffect, useState } from "react";

const Config = () => {
  const [productos, setProductos] = useState([]);
  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };
  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  });

  return productos;
};

export default Config;
