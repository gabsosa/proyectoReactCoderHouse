import { createContext, useState } from "react";

export const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }

        // Determina si el producto ya esta en el carrito
        const isInCart = cart.some((prod) => prod.id === newItem.id)

        // Si esta en el carrito
        if(isInCart) {
            const newCart = cart.map((prod) => prod.id === newItem.id ? {...prod,
            quantity: prod.quantity + quantity
            } : prod)
            setCart(newCart)
        } else { // Si no esta en el carrito
            setCart([...cart, newItem])
        }
    }

    // Remueve un producto del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter((prod) => prod.id !== id)
        setCart(updatedCart)
    }

    // Vacia el carrito
    const cleanCart = () => {
        setCart([])
    }

    // Obtiene el precio total del carrito
    const getTotalPrice = () => {
        const total = cart.reduce((actual, item) => actual + item.precio * item.quantity, 0)
        return total
    }

    // Obtiene la cantidad total del producto
    const getQuantity = () => {
        let total = 0
        cart.forEach((producto) => total += producto.quantity)
        return total
    }

    return (
        <Context.Provider value={{ 
            cart,
            addItem,
            removeItem,
            cleanCart,
            getQuantity,
            getTotalPrice
         }}>
            {children}
        </Context.Provider>
    )
}

export default Context