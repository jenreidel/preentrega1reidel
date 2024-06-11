import Header from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={<div>PLANTAS DE INTERIOR PARA VESTIR TODOS TUS AMBIENTES</div>}/>} />
          <Route path="/categorias/:idCategorias" element={<ItemListContainer greeting={<div>PLANTAS DE INTERIOR PARA VESTIR TODOS TUS AMBIENTES</div>}/>} />
          <Route path="/producto/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>  
  )
}

export default App;

