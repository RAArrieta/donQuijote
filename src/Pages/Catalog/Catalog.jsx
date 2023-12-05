import "./Catalog.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Catalog = () => {

  const { productos } = useContext(CartContext);
  console.log(productos)
  return (
    <div className="catalog">{productos[1].name}</div>
  )
}

export default Catalog