import db from "../Data/ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchData = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "ListProducts");

    getDocs(productsRef).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return products
}

export default FetchData


