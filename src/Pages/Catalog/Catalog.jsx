import "./Catalog.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Catalog = () => {

  const {products}=useContext(CartContext)
  console.log(products)
  
  return (
    <div className="catalog">Catalogo</div>
  )
}

export default Catalog