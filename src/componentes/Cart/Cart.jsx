import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";

const Cart = () => {
  const { cart, getTotalPrice, removeItem, cleanCart } = useContext(Context);

  if (cart.length === 0) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        width="100%"
        h="100vh"
      >
        <h1>El carrito esta vacio</h1>
        <Button mt={2}>
          <Link to="/">Volver a la tienda</Link>
        </Button>
      </Flex>
    );
  } else {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="100%"
        height="calc(100vh - 40px)"
      >
        <TableContainer width="80%" border="1px solid black" borderRadius="5px">
          <Table variant="simple">
            <Thead bg="rgb(49, 42, 42)">
              <Tr>
                <Th color="white">Producto</Th>
                <Th color="white">Cantidad</Th>
                <Th color="white">Precio</Th>
                <Th color="white">SubTotal</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((producto) => (
                <Tr key={producto.id}>
                  <Td>{producto.nombre}</Td>
                  <Td>{producto.quantity}</Td>
                  <Td>{producto.precio}$</Td>
                  <Td>{producto.precio * producto.quantity}$</Td>
                  <Td>
                    <BsFillTrash3Fill
                      cursor="pointer"
                      onClick={() => removeItem(producto.id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex width="80%" align="center" justify="center" mt="10px">
          <Button
            _hover={{ filter: "brightness(1.8)" }}
            color="white"
            bg="rgb(49, 42, 42)"
            onClick={cleanCart}
            mr="10px"
          >
            Vaciar Carrito
          </Button>
          <Button
            _hover={{ filter: "brightness(1.8)" }}
            color="white"
            bg="rgb(49, 42, 42)"
            mr="10px"
          >
            <Link to={`/checkout`}>
              Terminar compra
            </Link>
          </Button>
          <Text>Precio Total: {getTotalPrice()}$</Text>
        </Flex>
      </Flex>
    );
  }
};

export default Cart;
