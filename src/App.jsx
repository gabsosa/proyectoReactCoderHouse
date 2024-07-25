import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./componentes/PageNotFound/PageNotFound";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./componentes/Cart/Cart";
import CheckOut from "./componentes/CheckOut/CheckOut";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={`/`} element={<ItemListContainer title="Productos"/>}/>
            <Route path={`/categorias/:categoriaId`} element={<ItemListContainer title="Productos"/>}/>
            <Route path={`/productos/:productId`} element={<ItemDetailContainer/>}/>
            <Route path={`/cart`} element={<Cart />} />
            <Route path={`/checkout`} element={<CheckOut />}/>
            <Route path={`*`} element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;