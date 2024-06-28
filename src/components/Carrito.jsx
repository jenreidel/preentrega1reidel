import '../css/Carrito.css';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, aumentarCantidad, disminuirCantidad } = useContext(CartContext);

  return (
    <div>
      <hr />
      <br />
      {
        carrito.length > 0 ?
        <div>
          <div className='container'>
            <div className='container-prod'>
            {carrito.map((prod) => 
              <div className='prod-carrito'>
                <div>
                  <img className="img-carrito" src={prod.imagen} alt={prod.nombre}/>
                </div>
                <h3>{prod.nombre}: ${prod.precio}</h3> 
                <button className='buttonMasMenos' onClick={() => {disminuirCantidad(prod.id)}}>-</button> 
                <div>{prod.cantidad}</div> 
                <button className='buttonMasMenos' onClick={() => {aumentarCantidad(prod.id)}}>+</button>
                <button className='buttonMasMenos' onClick={() => {eliminarProducto(prod)}}><span role="img" aria-label="Tacho de basura">🗑️</span></button>
              </div>
            )}
            </div>
          </div>
          <div className='total'>
            <h2>Total: ${calcularTotal()}</h2>
            <Button className='button-vaciar' onClick={vaciarCarrito}>Vaciar Carrito</Button>
            <Link to="/finalizar-compra"><Button className='button-comprar'>Comprar</Button></Link>
          </div>
        </div>
         :
        <div className='vacio'>
          <h2>Carrito Vacío</h2>
          <p>No seleccionaste ningún producto.</p>
        </div>
      }
    </div>
  )
}

export default Carrito
