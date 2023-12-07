import "./Orders.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Orders = () => {
  const { listProducts, Product } = useContext(CartContext);

  const [id, setId] = useState();
  let codigo = 0;
  const Codigo = (e) => {
    codigo = Number(e.target.value);
  };
  const ingCodigo = () => {
    setId(codigo);
  };

  const product = Product(id);

  useEffect(() => {
    console.log(product);
  });

  return (
    <div className="orders">
      {listProducts.length > 0 && listProducts[0].name}
      <input type="number" placeholder="Codigo" onChange={Codigo} />
      <button onClick={ingCodigo}>ingresar</button>
    </div>
  );
};

export default Orders;
