import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./componentes/PageNotFound/PageNotFound";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={`/`} element={<ItemListContainer title="Productos"/>}/>
          <Route path={`/categorias/:categoriaId`} element={<ItemListContainer title="Productos"/>}/>
          <Route path={`/productos/:productId`} element={<ItemDetailContainer/>}/>
          <Route path={`*`} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;