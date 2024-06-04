import ItemDetail from './ItemDetail';
import { listaProductos } from '../../productos';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function ItemDetailContainer () {

    const [cargando, setCargando] = useState(true);
    const [product, setProduct] = useState({});
    const {idProducto} = useParams();

    const buscarProducto = async () => {
        return await new Promise ((resolve) => {
            setTimeout(()=>{
                idProducto ?
                resolve(listaProductos.find((prod) => prod.id === parseInt(idProducto)))
                : resolve(listaProductos)
            }, 2000)
            })
        };

    useEffect(() => {
        setCargando(true);
        buscarProducto()
        .then((res) => {
            setProduct(res)
            setCargando(false)
        })
        
    }, [idProducto]);
        
    return (
        <>
            {
                cargando ? (
                    <div style={{margin: 20, display: "flex", justifyContent: 'center', alignItems: 'center'}}> 
                    Cargando... 
                    </div>
                ) : (<ItemDetail key={product.id} item={product}/>) 
            }
        </>
    )
}

export default ItemDetailContainer;