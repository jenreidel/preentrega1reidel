import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/config";
import '../css/Checkout.css';
import Form from 'react-bootstrap/Form';

const Checkout = () => {
    
    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
      const pedido = {
        cliente: data,
        productos: carrito,
        total: calcularTotal()
      }

      const pedidosRef = collection (db, "pedidos");

      addDoc(pedidosRef, pedido)
        .then((doc) => {
          setDocId(doc.id);
          vaciarCarrito();
        })
    }
  

  if (docId) {
    return (
      <div className="container">
        <div className="detalle-compra">
          <h1>¡Muchas gracias por tu compra!</h1>
          <h3>Para hacer el seguimiento de tu pedido, el identificador es: <strong>{docId}</strong></h3>
        </div>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="finalizar-compra">
        <h1>Finalizar Compra</h1>  
        <hr />   
        <h2>Por favor ingresa tus datos</h2>
        <br />
        <Form onSubmit={handleSubmit(comprar)}>
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Nombre </Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Apellido </Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido" {...register("apellido")} />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>E-mail </Form.Label>
            <Form.Control type="email" placeholder="Ingrese su email" {...register("email")} />
          </Form.Group>
          <br />
          <Button className="comprar" type="submit">Comprar</Button>
        </Form>
      </div>
    </div>
  )
}

export default Checkout
