import React from "react";
import "../assets/css/Header.css";
import cartIcon from "../assets/statics/carrito.png";
import backArrow from "../assets/statics/volver.png";

export default function Header() {
  return (
    <>
      <a href="cart">
        <img src={cartIcon} alt="" className="carritou" />
      </a>
      <a href="">
        <img src={backArrow} alt="" className="volver" />
      </a>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
