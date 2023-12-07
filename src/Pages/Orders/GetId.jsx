import { useState } from "react";


const GetId = () => {
  const [id, setId] = useState();
  let codigo = 0;

  const Codigo = (e) => {
    codigo = Number(e.target.value);
  };

  const ingCodigo = () => {
    setId(codigo);
    return id
  };

  return (
    <>
      <input type="number" placeholder="Codigo" onChange={Codigo} />
      <button onClick={ingCodigo}>ingresar</button>
    </>
  );
};

export default GetId;
