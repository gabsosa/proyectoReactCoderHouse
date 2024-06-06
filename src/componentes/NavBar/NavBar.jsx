import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h3>ClothingStore</h3>
            <div>
                <button className="buttonNavBar">Remeras</button>
                <button className="buttonNavBar">Pantalones</button>
                <button className="buttonNavBar">Zapatillas</button>
                <button className="buttonNavBar">Buzos</button>
                <button className="buttonNavBar">Camperas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar