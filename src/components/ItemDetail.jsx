import { useContext } from 'react';
import '../css/ItemDetail.css'
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({item}) => {

  const {agregarAlCarrito} = useContext(CartContext);

  return (
    <div key={item.id}>
      <hr />
      <div style={{margin: 20, display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <h2 className='txt-normal'><strong>{item.nombre}</strong></h2>
      </div>
      <div className='container'>
        <div className= "container-flex">
          <div>
            <img className="img-detail" src={item.imagen} alt={item.nombre}/>
          </div>
          <div className= "precio-descripcion">
            <h3 className='txt-normal'>Precio: ${item.precio}.-</h3>
            <p className='txt-normal'>{item.descripcion}</p>
            <div className="button">
              <Button onClick={() => agregarAlCarrito(item)} className="button1" variant="light">Agregar al Carrito</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
