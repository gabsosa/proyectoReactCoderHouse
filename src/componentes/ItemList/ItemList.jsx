import Item from '../Item/Item'
import { Flex } from '@chakra-ui/react'

const ItemList = ({ productos }) => {
    return (
        <Flex boxSizing='border-box' direction='row' justify='center' align='space-between' wrap='wrap'>
            {   
                productos.map((producto, index) => <Item key={index} {...producto}/>)             
            }
        </Flex>
    )
}

export default ItemList