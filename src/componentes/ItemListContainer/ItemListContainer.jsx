import {
  Flex,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spinner
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams, Link } from 'react-router-dom'

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams() 

  useEffect(() => {
    setLoading(true)
    const dataProducts = categoriaId ? getProductsByCategory( categoriaId ) : getProducts();
    dataProducts
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoriaId]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="auto"
      width="100%"
    >
      <div className="titleContainer">
        <h1>{title}</h1>
      </div>
      {
        loading ? 
        <Flex width='100%' height='400px' align='center' justify='center'>
          <Spinner />
        </Flex>
        :
        <ItemList productos={products} />
      }
    </Flex>
  );
};

export default ItemListContainer;
