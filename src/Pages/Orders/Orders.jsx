import "./Orders.css";
import InputOrders from "./InputOrders";
import { useState } from "react";

const Orders = () => {
  const [newOrderOn, setNewOrderOn] = useState (false);
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState([]);

  const handleNewProductOrder = (newProductOrder) => {
    setNewOrder((prevOrders) => [...prevOrders, newProductOrder]);
  };

  const handleNewOrder = () => {
    if (newOrder != null || newOrder.length > 0) {
      setNewOrder([]);
      setNewOrderOn(true);
    } else {
      alert("No hay productos cargados...");
    }
  };

  const handlePushOrder = () => {
    if (newOrder != null && newOrder.length > 0) {
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      setNewOrder([]);
      setNewOrderOn(false);
    } else {
      alert("No hay productos en el pedido actual.");
    }
  };

  console.log(orders);
  return (
    <div>
      <button onClick={handleNewOrder}>Nuevo Pedido</button>
      <button onClick={handlePushOrder}>Cerrar Pedido</button>

      <InputOrders newOrderOn={newOrderOn} onNewProductOrder={handleNewProductOrder} />

      <div className="existing-orders">
        <h2>Existing Orders</h2>
        <ul>
          {newOrder.map((order, index) => (
            <li key={index}>
              {order.name} - Quantity: {order.quantity} - Subtotal: $
              {order.subTotalPrice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
