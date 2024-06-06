import { BsCart4 } from "react-icons/bs"
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className="widgetContainer">
            <BsCart4 className="cart-icon" />
            0
        </div>
    )
}

export default CartWidget