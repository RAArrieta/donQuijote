import React from 'react'

const PruebaSubirPedido = () => {

    const [datos, setDatos] = useState({
        productos: [
          { id: 1, nombre: 'Producto 1', precio: 10 },
          { id: 2, nombre: 'Producto 2', precio: 20 },
        ],
        direccion: 'Calle Ejemplo, Ciudad',
        observacion: 'Observación sobre la compra',
      });












  return (
    <div>PruebaSubirPedido</div>
  )
}

export default PruebaSubirPedido