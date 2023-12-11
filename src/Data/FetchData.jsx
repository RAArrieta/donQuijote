import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, getDocs } from "firebase/firestore"


const FetchData = () => {
  const { dbF } = useContext(CartContext);
  const [db, setdb] = useState([]);


  // const fetchDB = () => {
  //   return new Promise((resolve) => {
  //     resolve(data);
  //   });
  // };

  useEffect(() => {
    const productsRef = collection(dbF, "products")

    getDocs(productsRef)
    .then ((resp)=>{
      setdb(resp.docs)
    })
    // fetchDB().then((res) => {
    //   setdb(res);
    // });
  });

  return db;
};

export default FetchData;


