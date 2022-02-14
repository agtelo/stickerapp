import React, { useContext } from "react";
import Context from "../context/Context";
import "../assets/css/Item.css";

export default function Item(props) {
  const { id, descripcion, medidas, precio, nombre, img } = props;
  const { addToCart } = useContext(Context);
  const handleCart = () => {
    addToCart(id);
  };
  return (
    <>
      <div className="home-item">
        <img src={img} alt="" className="home-item-img" />
        <div className="home-item-info">
          <a href="/products">
            <h1 className="home-item-titulo">{nombre}</h1>
          </a>
          <p className="home-item-medidas">Medidas: {medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ {precio}</h3>
            <button className="home-item-comprar" onClick={handleCart}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
