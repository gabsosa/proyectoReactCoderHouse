import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const ItemCount = ({ initialValue, stock }) => {
  const [count, setCount] = useState(initialValue);

  console.log(initialValue);
  console.log(stock);

  const incrementar = () => {
    count < stock && setCount(count + 1);
  };

  const decrementar = () => {
    count > initialValue && setCount(count - 1);
  };

  return (
    <div className="container">
      <Flex borderRadius='5px' color='white' margin='5px 0' width='100%' justify='center' bg="rgb(49, 42, 42)">
        <Button fontSize='1rem' color='white' bg="rgb(49, 42, 42)" height="30px" m='0 5px' onClick={incrementar} >
          +
        </Button>
        <Text width='30px' textAlign='center'>{count}</Text>
        <Button fontSize='1rem' color='white' bg="rgb(49, 42, 42)" height="30px" m='0 5px' onClick={decrementar}>
          -
        </Button>
      </Flex>
      <Button color='white' bg="rgb(49, 42, 42)" height="30px">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
