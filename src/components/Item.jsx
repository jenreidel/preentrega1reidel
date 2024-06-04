import { Link } from 'react-router-dom';
import '../css/Item.css';
import Card from 'react-bootstrap/Card';


const Item = ({prodSelec}) => {

    return (
        <div>
            <Card className='card'>
                <Card.Img className='img' variant="top" src={prodSelec.imagen} alt={prodSelec.nombre}/>
                <Card.Body>
                    <h3 className='txt-normal'>{prodSelec.nombre}</h3>
                    <h5 className='txt-normal'>${prodSelec.precio}</h5>
                    <Link className='link' to={`/producto/${prodSelec.id}`}>Ver Detalles</Link>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Item;