import Item from '../Item/Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
    return (
        <Flex boxSizing='border-box' justify='center' wrap='wrap'>
            {   
                productos.map((producto, index) => <Item key={index} {...producto}/>)             
            }
        </Flex>
    )
}

export default ItemList