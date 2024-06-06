import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    return(
        <div className="itemListContainer">
            <h1>{ greeting }</h1>
        </div>
    )
}

export default ItemListContainer