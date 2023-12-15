import { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import FetchProduct from "../../Data/FetchProduct";

const InputOrders = ({ onNewProductOrder, newOrderOn }) => {
  const { products } = useContext(CartContext);
  const [productCode, setProductCode] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleChangeCode = (e) => {
    setProductCode(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setProductQuantity(parseInt(e.target.value));
  };

  const submitProduct = (e) => {
    e.preventDefault();
    if (newOrderOn) {
      if (!isNaN(productCode) && productCode > 0 && productQuantity > 0) {
        const foundProduct = FetchProduct(productCode, products);
       if (foundProduct) {
          const newProductOrder = {
            id: foundProduct.id,
            name: foundProduct.name,
            quantity: productQuantity,
            subTotalPrice: productQuantity * foundProduct.price,
          };

          onNewProductOrder(newProductOrder);
        } else {
          alert("El producto no existe. Verifique el código.");
        }
        
      } else {
        alert("Debe cargar código y cantidad...");
      }
      setProductCode("");
      setProductQuantity("");
    } else {
      alert("Debe comenzar un nuevo pedido...");
    }
  };

  return (
    <form onSubmit={submitProduct}>
      <input
        type="number"
        value={productCode}
        onChange={handleChangeCode}
        placeholder="Código"
        required
        disabled={!newOrderOn}
      />
      <input
        type="number"
        value={productQuantity}
        onChange={handleChangeQuantity}
        placeholder="Cantidad"
        required
        disabled={!newOrderOn}
      />
      <button onClick={submitProduct} type="submit" disabled={!newOrderOn}>
        Igresar Producto
      </button>
    </form>
  );
};

export default InputOrders;
