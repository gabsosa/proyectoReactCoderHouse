import {
  Flex,
  Image,
  Text,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import Context from "../../context/CartContext";
import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetail = ({
  nombre,
  precio,
  img,
  stock,
  detalles,
  categoria,
}) => {
  return (
    <Flex
      borderRadius="5px"
      width="100%"
      bg="white"
      p="10px"
      flexDirection='column'
    >
      <Flex width='100%' height='200px' align="center" justify="center">
        <Image
          height={categoria === "Zapatilla" ? "60%" : "80%"}
          widht={categoria === "Zapatilla" ? "20%" : "60%"}
          src={img}
          alt={nombre}
        ></Image>
      </Flex>
      <Flex
        width="100%"
        borderRadius="5px"
        flexDirection="column"
        p="10px"
      >
        <Flex borderRadius="5px" width="100%" flexDirection='column'>
          <ProductBuyer nombre={nombre} precio={precio} stock={stock} />
          <ProductDetail detalles={detalles} />
        </Flex>
        <Flex
          borderRadius="5px"
          width="100%"
          flexDirection="column"
        >
          <ProductRelation nombre={nombre} categoria={categoria} />
        </Flex>
      </Flex>
    </Flex>
  );
};

// Informacion sobre la compra
const ProductBuyer = ({ nombre, precio, stock }) => {
  const [quantity, setQuantity] = useState(0); // Estado de cantidad del producto para renderizado condicional
  const [count, setCount] = useState(1); // Estado de la cantidad del producto
  const { addItem } = useContext(Context); // Contexto
  const [talle, setTalle] = useState(""); // Talle del producto

  // Agrega el producto y su cantidad al carrito
  const onAdd = (quantity) => {
    addItem(
      {
        id,
        nombre,
        precio,
        talle,
      },
      quantity
    );
    setQuantity(quantity);
    console.log("Agregado al carrito");
  };

  return (
    <Flex
      borderRadius="5px"
      flexDirection="column"
      p="10px"
      width="100%"
    >
      <Text fontSize="1rem" fontWeight="bold">
        {nombre}
      </Text>
      <Text fontSize="1rem" fontWeight="bold" color="blue" mt="15px">
        ${precio}
      </Text>
      <Text fontSize="1rem" fontWeight="bold" mt="15px">
        Talle: {talle}
      </Text>
      <Flex widht="100%" mt="15px" height="40px" justify="space-between">
        {["S", "M", "L", "XL"].map((item, index) => {
          return (
            <Button
              height="100%"
              width="20%"
              key={index}
              onClick={() => setTalle(item)}
            >
              {item}
            </Button>
          );
        })}
      </Flex>
      <Text fontSize="1rem" fontWeight="bold" mt="15px">
        Cantidad : {count}
      </Text>
      {quantity === 0 ? (
        <ItemCount
          onAdd={() => onAdd(count)}
          count={count}
          setCount={(cant) => setCount(cant)}
          initialValue={1}
          stock={stock}
        />
      ) : (
        <Flex
          gap={1}
          width="100%"
          align="center"
          justify="space-between"
          mt="10px"
          fontWeight={800}
        >
          <Button
            _hover={{ filter: "brightness(1.8)" }}
            width="45%"
            height="40px"
            fontSize="0.7rem"
            fontWeight="bold"
          >
            <Link to="/cart">Ir al carrito</Link>
          </Button>
          <Button
            _hover={{ filter: "brightness(1.8)" }}
            width="40%"
            height="40px"
            fontSize="0.7rem"
            fontWeight="bold"
          >
            <Link to="/">Ir a la tienda</Link>
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

// Detalles del producto
const ProductDetail = ({ detalles }) => {
  return (
    <Flex
      direction="column"
      width="100%"
      p="20px"
      borderRadius="5px"
    >
      <Text m="10px 0" fontSize="2rem">
        Detalles del producto
      </Text>
      <TableContainer borderRadius="5px">
        <Table variant="simple" size="sm">
          <Tbody bg="var(--chakra-colors-gray-100)">
            {Object.entries(detalles).map(([key, value], index) => {
              return (
                <Tr key={index}>
                  <Td>{key}</Td>
                  <Td>{value}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

// Producto relacionado
const ProductRelation = ({ nombre, categoria }) => {
  const [products, setProducts] = useState([]); // Productos relacionados

  // Efectos secundarios
  useEffect(() => {
    // Obtiene los productos relacionados
    const getProductsRelations = async () => {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", categoria)
      );
      const response = await getDocs(q);
      const data = response.docs.map((item) => {
        const newItem = {
          ...item.data(),
          id: item.id,
        };
        console.log(newItem);
        return newItem;
      });
      setProducts(data);
      console.log(data);
    };

    getProductsRelations();
  }, []);

  return (
    <>
      <Text height="20%" fontWeight="bold" fontSize="1.5rem" mb='10px'>
        Productos relacionados
      </Text>
      <Flex height="80%" width="100%" gap="20px">
        {products.map((item, index) => {
          if (item.nombre !== nombre) {
            return (
              <Flex
                key={index}
                boxSizing="border-box"
                borderRadius="5px"
                align="center"
                direction="column"
                border="1px solid black"
                p="10px"
                width="200px"
                fontSize="1rem"
              >
                <h1>{item.nombre}</h1>
                <Image
                  mt="10px"
                  boxSize="100px"
                  objectFit="cover"
                  src={item.img}
                  alt={item.nombre}
                />
                <Button
                  color="white"
                  bg="rgb(49, 42, 42)"
                  height="30px"
                  mt="5px"
                >
                  <Link to={`/productos/${item.id}`}>Ver detalles</Link>
                </Button>
              </Flex>
            );
          }
        })}
      </Flex>
    </>
  );
};

export default ItemDetail;
