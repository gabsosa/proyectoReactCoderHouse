import { Flex, Stack, Image, Text } from "@chakra-ui/react";
import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({ nombre, precio, img, stock, description }) => {
  return (
    <Flex width='100%' height='auto' p='10px' justify='start'>
      <Flex
        boxSizing="border-box"
        borderRadius="5px"
        mb="20px"
        mr="20px"
        align="center"
        direction="column"
        border="1px solid black"
        p="10px"
        width="200px"
        fontSize="1rem"
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
        <Stack spacing="20px" direction="row" align="center">
          <p>Precio: ${precio}</p>
        </Stack>
        <ItemCount initialValue={1} stock={stock} />
      </Flex>
      <Flex direction='column'>
        <Text m='10px 0' fontSize='2rem'>Descripción:</Text>
        <Text fontSize='1.2rem'>{description}</Text>
      </Flex>
    </Flex>
  );
};

export default ItemDetail;
