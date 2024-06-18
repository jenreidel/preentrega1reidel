import '../css/ItemListContainer.css';
import banner from '../assets/img/banner-jardininterior1.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection , getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = ( {greeting} ) => {

  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const {idCategorias} = useParams();

  useEffect (() => {

    const productosRef = collection(db, "productos");
    const q = idCategorias ? query(productosRef, where("categoria.id", "==", idCategorias)) : productosRef;

    setCargando(true);
    getDocs(q)
    .then((res) => {
      setProductos(
        res.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
        })
      );
      setCargando(false);
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
          ) : (<ItemList items={productos}/>)
        }
      </div>
    </div>
  );
};

export default ItemListContainer;
