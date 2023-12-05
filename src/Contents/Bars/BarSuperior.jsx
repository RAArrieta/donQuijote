import "./Bar.css";

const BarSuperior = () => {
  return (
    <div className="bar">
        <div>Cantidad de pedidos: 18</div>
        <div>Entregados: 14</div>
        <div className="pad_rigth">Pendientes: 4</div>
    </div>
  )
}

export default BarSuperior