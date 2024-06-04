import logo from '../assets/img/logojardininterior.jpg';
import irArriba from '../assets/img/irarriba1.png';
import '../css/Footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <hr />
            <div className="footer-centro">
                <div>
                    <p className="titulo-footer">CONTACTO</p>
                    <p className="txtnormal">Tel. +5411-2030-4050</p>
                    <p className="txtnormal">info@tujardininterior.com</p>
                    <p className="txtnormal">Av. Corrientes 5473, CABA</p>
                </div>
                <div>
                    <img src={logo} alt="logo de tu jardin interior" className="img-footer" width="200"/>
                </div>
                <div>
                    <p className="titulo-footer">HORARIO DE ATENCIÓN</p>
                    <p className="txtnormal">Lunes a Viernes de 10 a 19hs.</p>
                    <p className="txtnormal">Sábados de 10 a 16hs.</p>
                    <p className="txtnormal">Domingos y Feriados CERRADO.</p>
                </div>
            </div>
            <div>
                <a href="#ir-arriba"><img src={irArriba} alt="flecha ir arriba" width="35px" className="arriba-red"/></a>
            </div>
            <div className="derechos txtnormal">
                <p>Desarrollado por Jenisse Reidel. Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer;