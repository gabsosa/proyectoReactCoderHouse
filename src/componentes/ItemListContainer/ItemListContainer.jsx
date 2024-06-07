import { Flex } from '@chakra-ui/react'

const ItemListContainer = ({ title }) => {
    return(
        <Flex justify='center' align='center' height='400px' width='100%'>
            <h1 style={{fontSize: '25px'}}>{ title }</h1>
        </Flex>
    )
}

export default ItemListContainer