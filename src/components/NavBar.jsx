import '../css/NavBar.css'
import { CartWidget } from './CartWidget'
import logo from '../assets/img/logojardininterior.jpg'

export const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo de tu jardin interior" style={{ width: '150px', height: 'auto' }}/>
      <ul className='navlist'>
        <li><a href="#" className="nav-item">Inicio</a></li>
        <li><a href="#" className="nav-item">Plantas de Interior</a></li>
        <li><a href="#" className="nav-item">Macetas</a></li>
        <li><a href="#" className="nav-item">Accesorios</a></li>
        <li><a href="#" className="nav-item">Contactos</a></li>
      </ul>
      <CartWidget />
    </div>
  )
}
