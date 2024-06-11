import { Link } from 'react-router-dom'
import carrito from '../assets/img/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);
  
  return (
    <Link to="/carrito">
      <span><img src={carrito} alt="carrito de compras" style={{ width: '45px', height: 'auto' }}/>
        {calcularCantidad()}
      </span>
    </Link>
  )
}