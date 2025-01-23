import { Button, VStack, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, img, precio, id }) => {
  return (
    <Flex
      boxSizing="border-box"
      borderRadius="5px"
      gap='5px'
      align="center"
      mb='5px'
      mr='5px'
      direction="column"
      border="1px solid black"
      p="10px"
      width={{base: '150px', sm: '200px'}}
      fontSize='1rem'
    >
      <h1>{nombre}</h1>
      <Image
        mt="20px"
        mb="20px"
        boxSize="100px"
        objectFit="cover"
        src={img}
        alt={nombre}
      />
      <VStack spacing="20px" direction="row" align="center">
        <p>Precio: ${precio}</p>
        <Button color="white" bg="rgb(49, 42, 42)" height="30px">
          <Link to={`/productos/${id}`}>Ver detalles</Link>
        </Button>
      </VStack>
    </Flex>
  );
};

export default Item;