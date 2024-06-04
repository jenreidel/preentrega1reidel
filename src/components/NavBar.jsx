import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar.css'
import logo from '../assets/img/logojardininterior.jpg';
import { Link } from 'react-router-dom';
import listaCategorias from '../../categorias.json'
import { NavLink } from 'react-bootstrap';
import { CartWidget } from './CartWidget';

function Navegador() {
  return (
    <div>
      <Navbar id="ir-arriba" className="bg-color" data-bs-theme="light">
        <Container className="navbar">
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src={logo}
                alt="logo de tu jardin interior"
                style={{ width: "150px", height: "auto" }}
              />
            </NavLink>
          </Navbar.Brand>
          {/* <Nav>
            <Link className="nav-item" to={"/"}>Inicio</Link>
            <Link className="nav-item" to={"/categorias/Planta"}>Plantas de Interior</Link>
            <Link className="nav-item" to={"/categorias/Maceta"}>Macetas</Link>
            <Link className="nav-item" to={"/categorias/Accesorio"}>Accesorios</Link>
          </Nav> */}
          <div>
            {
              listaCategorias.map((categorias) => (
                <NavLink key={categorias.id} to={`/categorias/${categorias.id}`} className="nav-item">
                  {categorias.nombre}
                </NavLink>
              ))
            }
          </div>
          <CartWidget />
        </Container>
      </Navbar>
    </div>
  );
}

export default Navegador;
