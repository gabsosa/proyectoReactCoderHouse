import { useState } from 'react'
import './producto.css'

function Producto({description, precio, url}) {

    const [pos, setPos] = useState(false)
    const [compra, setCompra] = useState(false)

    const handleMouseEnter = () => {
        setPos(true)
    }

    const handleMouseLeave = () => {
        setPos(false)
    }

    const handleClick = () => {
        setCompra(!compra)
    }

    return (
        <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={url} alt="Remera de Poliester" />
            <h3 className={pos ? 'active' : 'disactive'}>{description}</h3>
            <h2>{precio}</h2>
            {compra ? <button className='btn' onClick={handleClick}>Comprado</button> : 
            <button className='btn' type='button' onClick={handleClick}>Comprar</button>}
        </article>
    )
}

export default Producto