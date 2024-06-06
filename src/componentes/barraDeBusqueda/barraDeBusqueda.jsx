import { useState } from 'react'
import './barraDeBusqueda.css'
import { CiSearch } from 'react-icons/ci'

function BarraDeBusqueda(){

    const [input, setInput] = useState('')
    const results = ['Pantalon1', 'Pantalon2', 'Pantalon3', 'Pantalon4', 'Remera', 'Remera2', 'Musculosa', 
    'Bufanda', 'Medias', 'Cinto', 'Buzos', 'Boxer', 'Zapatillas']

    function handleChange(event){
        setInput(event.target.value)
    }

    return(
        <>
            <div className='search-container'>
                <input onChange={handleChange} type="text" name="productoNombre" id="nombreProducto" className='input-search' placeholder='Buscar Productos'></input>
                <hr></hr>
                <button className="search-button" type='button'><CiSearch className='icon-search'/></button>
            </div>
            <ul className='results-container'>
                { 
                    results.map((value, index) => {
                        if(value.toLowerCase().includes(input.toLowerCase()) && input.length != 0){
                            return <li className='results-item' key={index}>{value}</li>
                        }
                    })
                }
            </ul>
        </>
    )
}

export default BarraDeBusqueda;