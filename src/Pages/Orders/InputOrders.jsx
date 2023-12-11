const InputOrders = () => {
  return (
    // <form onSubmit={handleSubmit(crearPedido)} className="form-data"></form>
    <form>
          <input
            type="number"
            placeholder="Código"
            {...register("id")}
            required
          />
          <button>
            Igresar Producto
          </button>
          <input
            type="text"
            placeholder="Dirección"
            {...register("dirección")}
            required
          />
          <input
            type="text"
            placeholder="Cliente"
            {...register("cliente")}
          />
          <input
            type="text"
            placeholder="Observación"
            {...register("observación")}
          />
          <button>
            Cargar Pedido
          </button>
        </form>
  )
}

export default InputData