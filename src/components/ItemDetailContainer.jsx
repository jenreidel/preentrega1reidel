import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemDetailContainer () {

    const [cargando, setCargando] = useState(true);
    const [product, setProduct] = useState({});
    const {idProducto} = useParams();

    useEffect(() => {

        const docRef = doc(db, "productos", idProducto);

        setCargando(true);
        getDoc(docRef)
            .then(res => {
                setProduct({...res.data(), id: res.id});
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