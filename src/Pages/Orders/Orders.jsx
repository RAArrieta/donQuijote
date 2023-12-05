import { useContext } from "react";
import "./Orders.css";
import { CartContext } from "../../CartContext/CartContext";


const Orders = () => {
  
  const {productos} = useContext (CartContext)

  return <div className="orders">{productos.length>0 && productos[0].name}</div>;
};

export default Orders;
