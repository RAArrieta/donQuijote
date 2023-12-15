import { useContext } from "react";
import "./Expense.css";
import { CartContext } from "../../CartContext/CartContext";

const Expense = () => {

  const {products}=useContext(CartContext)
  console.log(products)

  return (
    <div className="expense">Gastos</div>
  )
}

export default Expense
