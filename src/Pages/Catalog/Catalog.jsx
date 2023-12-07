import "./Catalog.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Catalog = () => {

  const { listProducts } = useContext(CartContext);
  
  return (
    <div className="catalog">{listProducts[1].name}</div>
  )
}

export default Catalog