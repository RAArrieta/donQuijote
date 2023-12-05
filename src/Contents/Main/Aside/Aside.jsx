import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="aside">
      <Link className="tree" to="/">Home</Link>
      <Link className="tree" to="/Orders">Pedidos</Link>
      <Link className="tree" to="/Catalog">Catalogo</Link>
      <Link className="tree" to="/Billing">Facturación</Link>
      <Link className="tree" to="/Statistics">Estadisticas</Link>
      <Link className="tree" to="/Expense">Gastos</Link>
      <Link className="tree" to="/PV">Precio de Ventas</Link>
    </div>
  )
}

export default Aside