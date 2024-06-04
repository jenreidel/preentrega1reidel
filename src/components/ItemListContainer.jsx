import '../css/ItemListContainer.css';
import banner from '../assets/img/banner-jardininterior1.png';
import { listaProductos } from '../../productos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = ( {greeting} ) => {

  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const {idCategorias} = useParams();

  const getProductos = () => {
    return new Promise ((resolve) => {
      setTimeout (()=>{
        resolve(listaProductos);
      }, 1000);
    });
  };

  useEffect (() => {

    setCargando(true);
    getProductos()
    .then((res) => {
      if (!idCategorias) {
          setProductos(res);
          setCargando(false);
      } else {
          setProductos(res.filter((prod) => prod.categoria.id === idCategorias));
          setCargando(false);
      }
  })
  
  }, [idCategorias]);

  

  return (
    <div>
      <img src={banner} width="100%" alt="banner de plantas con el logo de tu jardin interior" />
      <div className='greeting'>
        <h1>{greeting}</h1>
      </div>
      <div>
        {
          cargando ? (
            <div style={{margin: 20, display: "flex", justifyContent: 'center', alignItems: 'center'}}> 
            Cargando... 
            </div>
          ) : (<ItemList key={productos.id} items={productos}/>)
        }
      </div>
    </div>
  );
};

export default ItemListContainer;
