import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner, Flex } from '@chakra-ui/react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../config/firebase"
import { doc, getDoc } from "firebase/firestore"
import { Box } from '@chakra-ui/react'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const getData = async () => {
            const queryRef = doc(db, "productos", productId)
            const response = await getDoc(queryRef)
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProduct(newItem)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <Box minHeight='calc(100vh - 40px)'>
            {
                loading ? 
                <Flex width='100%' height='400px' align='center' justify='center'>
                    <Spinner />
                </Flex> 
                : 
                <ItemDetail {...product}/>
            }
        </Box>
    )
}

export default ItemDetailContainer