import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ItemCount = ({ initialValue, onAdd, stock, count, setCount }) => {

  const incrementar = () => {
    count < stock && setCount(count + 1);
  };

  const decrementar = () => {
    count > initialValue && setCount(count - 1);
  };

  return (
    <div className="container">
      {
        stock === 0 ? (
          <Flex direction='column' width='100%'>
            <Text textAlign='center' mb='0.5rem' color="red.500">Sin stock</Text>
            <Link to='/'>
              <Button>
                Regresar a la tienda
              </Button>
            </Link>
          </Flex>
        ) : (
          <>
            <Flex borderRadius='5px' mt='15px' width='100%' justify='center' bg='var(--chakra-colors-gray-100)' >
              <Button fontSize='1rem' width='calc(50% - 15px)' height="30px" onClick={incrementar} >
                +
              </Button>
              <Text width='30px' textAlign='center'>{count}</Text>
              <Button fontSize='1rem' width='calc(50% - 15px)' height="30px" onClick={decrementar}>
                -
              </Button>
            </Flex>
            <Button onClick={onAdd} height="30px" width='100%' mt='15px'>
              Agregar al carrito
            </Button>
          </>
        )
      } 
      
    </div>
  );
};

export default ItemCount;