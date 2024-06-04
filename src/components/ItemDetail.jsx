import '../css/ItemDetail.css'

const ItemDetail = () => {
  return (
    <div>
      <div style={{margin: 20, display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <h2 className='txt-normal centro'><strong>{item.nombre}</strong></h2>
      </div>
      <div className= "container-flex">
        <div>
          <img src={item.imagen} alt={item.nombre}/>
        </div>
        <div className= "precio-descripcion">
          <h4 className='txt-normal'>Precio: ${item.precio}.-</h4>
          <h5 className='txt-normal'>{item.descripcion}</h5>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
