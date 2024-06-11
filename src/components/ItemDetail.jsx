import '../css/ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div key={item.id}>
      <div style={{margin: 20, display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <h2 className='txt-normal'><strong>{item.nombre}</strong></h2>
      </div>
      <div className= "container-flex">
        <div>
          <img className="img-detail" src={item.imagen} alt={item.nombre}/>
        </div>
        <div className= "precio-descripcion">
          <h3 className='txt-normal'>Precio: ${item.precio}.-</h3>
          <p className='txt-normal'>{item.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
