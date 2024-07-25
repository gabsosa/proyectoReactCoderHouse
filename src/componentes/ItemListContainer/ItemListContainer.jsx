import { Flex, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const coleccion = collection(db, "productos");
      const queryRef = !categoriaId
        ? coleccion
        : query(coleccion, where("categoria", "==", categoriaId));
      const response = await getDocs(queryRef);
      const products = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id,
        };
        return newItem;
      });
      setProducts(products);
      setLoading(false);
    };

    getData();
  }, [categoriaId]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="auto"
      width="100%"
    >
      <Flex
        align="center"
        justify="center"
        fontWeight={500}
        height="60px"
        width="100%"
        fontSize="25px"
        boxSizing="border-box"
      >
        <h1>{title}</h1>
      </Flex>
      {loading ? (
        <Flex width="100%" height="400px" align="center" justify="center">
          <Spinner />
        </Flex>
      ) : (
        <ItemList productos={products} />
      )}
    </Flex>
  );
};

export default ItemListContainer;
