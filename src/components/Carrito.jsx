import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  return (
    <div>
      {carrito.map((prod) => <h1>{prod.nombre}: ${prod.precio}</h1>)}
      {
        carrito.length > 0 ?
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </> :
        <h2>Carrito Vacío :/</h2>
      }
    </div>
  )
}

export default Carrito
