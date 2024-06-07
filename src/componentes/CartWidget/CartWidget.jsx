import { BsCart4 } from "react-icons/bs"
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className="containerCart">
            <BsCart4 className="cart-icon" />
        </div>
    )
}

export default CartWidget