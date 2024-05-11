import carrito from '../assets/img/carrito.png'

export const CartWidget = () => {
  return (
    <div>
      <span><img src={carrito} alt="carrito de compras" style={{ width: '45px', height: 'auto' }}/>+5</span>
    </div>
  )
}