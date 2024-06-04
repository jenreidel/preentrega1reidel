import ItemDetail from './ItemDetail';
import data from '../data/productos.json'
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
                resolve(data.find((prod) => prod.id === parseInt(idProducto)))
                : resolve(data)
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