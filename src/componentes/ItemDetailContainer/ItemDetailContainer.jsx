import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsById } from "../../data/asyncMock"
import { Spinner, Flex } from '@chakra-ui/react'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    useEffect(() => {
        setLoading(true)

        getProductsById(productId)
        .then(prod => setProduct(prod))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {
                loading ? 
                <Flex width='100%' height='400px' align='center' justify='center'>
                    <Spinner />
                </Flex> 
                : 
                <ItemDetail {...product}/>
            }
        </div>
    )
}

export default ItemDetailContainer