export let productos = [
    {
        nombre: "Zapatilla Nike",
        precio: 100,
        stock: 10,
        categoria: 'Zapatilla',
        description: 'Zapatilla modelo Nike talle 40',
        img: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg'
    },
    {
        nombre: 'Remera Hombre',
        precio: 500,
        stock: 7,
        categoria: 'Remera',
        description: 'Remera elastica Masculina',
        img: 'https://http2.mlstatic.com/D_NQ_NP_649628-MLA50912086610_072022-O.webp'
   },
   {
        nombre: 'Pantalon',
        precio: 300,
        stock: 15,
        categoria: 'Pantalon',
        description: 'Pantalon de jean',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsM78ZtheaIiZWGT9dJm7tP2xDYZ6SRIyzuA&s'
   },
   {
        nombre: 'Campera',
        precio: 800,
        stock: 5,
        categoria: 'Campera',
        description: 'Campera de invierno',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xdRd9uQy5mOZ6zol7KSf5OWvfZao1jU9sQ&s'
   },
   {
        nombre: "Zapatilla Nike",
        precio: 100,
        stock: 10,
        categoria: 'Zapatilla',
        description: 'Zapatilla modelo Nike talle 40',
        img: 'https://media2.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatillas-nike-air-max-systm-negra-510010dm9537001-1.jpg'
    },
    {
        nombre: 'Remera Hombre',
        precio: 500,
        stock: 7,
        categoria: 'Remera',
        description: 'Remera elastica Masculina',
        img: 'https://http2.mlstatic.com/D_NQ_NP_649628-MLA50912086610_072022-O.webp'
    },
    {
        nombre: 'Pantalon',
        precio: 300,
        stock: 15,
        categoria: 'Pantalon',
        description: 'Pantalon de jean',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsM78ZtheaIiZWGT9dJm7tP2xDYZ6SRIyzuA&s'
    },
    {
        nombre: 'Campera',
        precio: 800,
        stock: 5,
        categoria: 'Campera',
        description: 'Campera de invierno',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xdRd9uQy5mOZ6zol7KSf5OWvfZao1jU9sQ&s'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        const productsByCategory = productos.filter((product) => product.categoria === categoria) 
        setTimeout(() => {
            resolve(productsByCategory)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        const productById = productos.find((product) => product.id === parseInt(id))
        setTimeout(() => {
            resolve(productById)
        }, 2000)
    })
}