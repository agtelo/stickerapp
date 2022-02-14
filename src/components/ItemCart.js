import React from "react";
import "../assets/css/ItemCart.css";

export default function ItemCart(props) {
  const { nombre, precio, img, cartDelete, id } = props;
  console.log(props, "como vienen al item carrito ");
  const handleDelete = () => {};
  cartDelete(id);
  return (
    <>
      <div className="carrito-item">
        <img src={img} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h3 className="carrito-item-precio">AR$ {precio}</h3>
        </div>
        <img
          src="borrar.png"
          alt=""
          className="carrito-item-borrar"
          onClick={handleDelete}
        />
      </div>
    </>
  );
}
