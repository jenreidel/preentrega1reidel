import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);
  
    const agregarAlCarrito = (producto) => {
      const estaEnElCarrito = carrito.find(prod => prod.id === producto.id);
      if (estaEnElCarrito) {
        setCarrito(carrito.map(prod =>
          prod.id === producto.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
        ));
      } else {
        setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      }
    }
  
    const calcularCantidad = () => {
      return carrito.length;
    }
  
    const calcularTotal = () => {
      return carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0).toFixed(2);
    }
  
    const vaciarCarrito = () => {
      setCarrito([]);
    }

    const eliminarProducto = (producto) => {
      setCarrito(carrito.filter(prod => prod.id !== producto.id));
    }

    const aumentarCantidad = (productoId) => {
      setCarrito(carrito.map(prod => prod.id === productoId ? { ...prod, cantidad: prod.cantidad + 1 } : prod
      ));
    }

    const disminuirCantidad = (productoId) => {
      setCarrito(carrito.map(prod => {
        if (prod.id === productoId) {
          const nuevaCantidad = prod.cantidad - 1; 
          if (nuevaCantidad <= 0) {
            eliminarProducto(prod);
          } else {
            return { ...prod, cantidad: nuevaCantidad };
          }
        }
        return prod;
      }));
    }

    return (
        <CartContext.Provider value={ { carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto, aumentarCantidad, disminuirCantidad } }>
            {children}
        </CartContext.Provider>
    )
}