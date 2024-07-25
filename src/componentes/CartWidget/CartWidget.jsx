import { BsCart4 } from "react-icons/bs"
import './CartWidget.css'
import { useContext } from "react"
import Context from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Flex } from '@chakra-ui/react'

const CartWidget = () => {

    const { getQuantity } = useContext(Context)
    const styleIcon = {
        height: '1.2rem',
        width: '1.2rem'

    }

    return(
        <Flex justify='center' align='center' height='100%' width='20%'>
            <Link to="/cart" style={{marginRight: '5px'}}><BsCart4 style={styleIcon}/></Link>
            <p>{ getQuantity() }</p>
        </Flex>
    )
}

export default CartWidget