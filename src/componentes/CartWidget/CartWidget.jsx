import { BsCart4 } from "react-icons/bs"
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className="containerCart">
            <BsCart4 className="cart-icon" />
            <p>0</p>
        </div>
    )
}

export default CartWidget