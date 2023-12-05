import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/Orders" className="op1">
        <img className="imgH" src={require("./imgHome/pedidos.png")} alt="Pedidos" />
        <p className="opcH">Pedidos</p>
      </Link>
      <Link to="/Billing" className="op2">
        <img className="imgH" src={require("./imgHome/caja.png")} alt="Caja" />
        <p className="opcH">Caja</p>
      </Link>
      <Link to="/Catalog" className="op3">
        <img className="imgH" src={require("./imgHome/catalogo.png")} alt="Catalogo" />
        <p className="opcH">Catalogo</p>
      </Link>
      <Link to="/Expense" className="op4">
        <img className="imgH" src={require("./imgHome/gastos.png")} alt="Gastos" />
        <p className="opcH">Gastos</p>
      </Link>
      <Link to="/Statistics" className="op5">
        <img className="imgH" src={require("./imgHome/estadistica.png")} alt="Estadisticas" />
        <p className="opcH">Estadisticas</p>
      </Link>
      <Link to="/PV" className="op6">
        <img className="imgH" src={require("./imgHome/pv.png")} alt="Calcular Precios" />
        <p className="opcH">Calcular Precios</p>
      </Link>
    </div>
  );
};

export default Home;
