import '../css/ItemListContainer.css'
import banner from '../assets/img/banner-jardininterior1.png'

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <img src={banner} width="100%" alt="banner de plantas con el logo de tu jardin interior" />
      <div className='greeting'>
        <h1>{greeting}</h1>
      </div>
    </div>
  )
}
