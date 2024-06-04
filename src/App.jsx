import Navegador from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <Navegador />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:idCategorias" element={<ItemListContainer greeting={<div><strong>PLANTAS DE INTERIOR</strong> {"PARA VESTIR TODOS TUS AMBIENTES"}</div>}/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

